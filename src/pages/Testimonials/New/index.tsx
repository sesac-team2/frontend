// src/pages/testimonials/NewTestimonialPage.tsx
import { useEffect, useMemo, useState } from 'react';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import RecipientInfo from './components/RecipientInfo';
import ProgressIndicator from './components/ProgressIndicator';
import QuestionCard from './components/QuestionCard';
import BottomActions from './components/BottomActions';
import SuccessModal from './components/SuccessModal';

import { testimonialApi } from '@/api/testimonial';

/**
 * ✅ 백엔드 응답 형태
 * {
 *   "questions": ["...", "..."]
 * }
 */
// type QuestionsResponse = {
//   questions: string[];
// };

/**
 * ✅ QuestionCard가 기대하는 Question 형태에 맞춤
 * QuestionCard에서 사용하는 필드:
 * - question.category
 * - question.required
 * - question.question
 * - question.placeholder
 */
export type TestimonialQuestion = {
  id: string;
  category: string;
  required: boolean;
  question: string;
  placeholder?: string;
};

// string[] -> TestimonialQuestion[]
const toQuestions = (qs: string[]): TestimonialQuestion[] =>
  qs.map((text, idx) => ({
    id: `q${idx + 1}`,
    category: 'AI 질문', // ✅ 임시 기본값
    required: true, // ✅ 전부 필수(원하면 규칙 바꿀 수 있음)
    question: text,
    placeholder: '답변을 입력해주세요.',
  }));

export default function NewTestimonialPage() {
  // ✅ 현재 라우트: /testimonials/:projectId/new?participant=xxx
  const { projectId } = useParams<{ projectId: string }>();
  const [searchParams] = useSearchParams();
  const recipientId = searchParams.get('participant') ?? '';

  const [questions, setQuestions] = useState<TestimonialQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      if (!projectId) {
        setError('projectId가 없습니다.');
        setLoading(false);
        return;
      }
      if (!recipientId) {
        setError('participant(수신자) 정보가 없습니다.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const data = await testimonialApi.getQuestions(projectId);

        console.log(data);

        setQuestions(toQuestions(data.questions ?? []));
        setAnswers({});
      } catch (e: any) {
        console.log('getQuestions failed:', e);
        console.log('status:', e?.response?.status);
        console.log('data:', e?.response?.data);
        setError(e?.response?.data?.message ?? '질문을 불러오지 못했어요.');
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [projectId, recipientId]);

  const requiredAnswered = useMemo(() => {
    return questions
      .filter((q) => q.required)
      .every((q) => answers[q.id]?.trim());
  }, [questions, answers]);

  const handleSubmit = () => {
    // TODO: createTestimonial 연동 시 여기서 POST
    setShowSuccess(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-sm text-muted-foreground">질문 생성 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="max-w-md w-full p-6 rounded-xl border border-border bg-card">
          <p className="text-sm text-red-500">{error}</p>

          <div className="mt-4">
            <Link
              to={projectId ? `/projects/${projectId}` : '/projects'}
              className="text-sm underline text-muted-foreground hover:text-foreground"
            >
              돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to={projectId ? `/projects/${projectId}` : '/projects'}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-semibold text-foreground">
                  Write Testimonial
                </h1>
                <p className="text-sm text-muted-foreground">
                  Project #{projectId}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Editable for 24 hours after submission</span>
            </div>
          </div>
        </div>
      </header>

      {/* RecipientInfo (원하면 recipientId를 prop으로 내려줘서 내부에서 사용자 정보 fetch 가능) */}
      <RecipientInfo />

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <ProgressIndicator answers={answers} />

        {/* Questions */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={index}
              value={answers[question.id] || ''}
              onChange={(value) =>
                setAnswers((prev) => ({ ...prev, [question.id]: value }))
              }
            />
          ))}
        </div>

        {/* Notice */}
        <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> You can edit your
            testimonial within 24 hours of submission. After that, changes will
            require project admin approval.
          </p>
        </div>
      </main>

      <BottomActions
        requiredAnswered={requiredAnswered}
        onSubmit={handleSubmit}
      />

      <SuccessModal open={showSuccess} onOpenChange={setShowSuccess} />

      {/* Spacer for fixed bottom */}
      <div className="h-24" />
    </div>
  );
}
