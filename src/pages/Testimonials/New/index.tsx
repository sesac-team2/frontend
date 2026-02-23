// src/pages/testimonials/NewTestimonialPage.tsx
import { useEffect, useMemo, useState } from 'react';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import RecipientInfo from './components/RecipientInfo';
import ProgressIndicator from './components/ProgressIndicator';
import QuestionCard from './components/QuestionCard';
import BottomActions from './components/BottomActions';
import SuccessModal from './components/SuccessModal';
import NewTestimonialSkeleton from './components/NewTestimonialSkeleton';

import { testimonialApi } from '@/api/testimonial';
import { projectApi } from '@/api/project';
import type { ProjectMember } from '@/types/project';

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
    category: 'AI 질문',
    required: true,
    question: text,
    placeholder: '답변을 입력해주세요.',
  }));

type QuestionsResponse = {
  questions: string[];
};

export default function NewTestimonialPage() {
  // ✅ 라우트: /testimonials/:projectId/new?participant=xxx
  const { projectId } = useParams<{ projectId: string }>();
  const [searchParams] = useSearchParams();
  const recipientId = searchParams.get('participant') ?? '';

  const [questions, setQuestions] = useState<TestimonialQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [recipient, setRecipient] = useState<ProjectMember | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 제출 관련
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ✅ 질문 불러오기
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

        const [questionData, detail] = await Promise.all([
          testimonialApi.getQuestions(projectId) as Promise<QuestionsResponse>,
          projectApi.getProjectDetail(projectId),
        ]);

        const selectedRecipient =
          detail.members?.find((member) => member.userId === recipientId) ??
          null;

        if (!selectedRecipient) {
          setError('수신자 참여자 정보를 찾을 수 없어요.');
          return;
        }

        setRecipient(selectedRecipient);
        setQuestions(toQuestions(questionData.questions ?? []));
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

  const buildContent = () => {
    const ordered = [...questions].sort((a, b) => a.id.localeCompare(b.id));
    const parts = ordered.map((q, idx) => {
      const a = (answers[q.id] ?? '').trim();
      return `${idx + 1}. ${q.question}\n- ${a}`;
    });
    return parts.join('\n\n');
  };

  const buildHighlights = () => {
    const ordered = [...questions].sort((a, b) => a.id.localeCompare(b.id));
    const bullets: string[] = [];

    for (const q of ordered) {
      const a = (answers[q.id] ?? '').trim();
      if (!a) continue;

      const firstLine = a.split('\n')[0].trim();
      const firstSentence = firstLine.split('. ')[0].trim();
      bullets.push(firstSentence.length > 0 ? firstSentence : firstLine);
    }

    return bullets.slice(0, 5);
  };

  const handleSubmit = async () => {
    if (!projectId) {
      setSubmitError('projectId가 없습니다.');
      return;
    }
    if (!recipientId) {
      setSubmitError('recipientId가 없습니다.');
      return;
    }
    if (!requiredAnswered) {
      setSubmitError('필수 질문을 모두 작성해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const content = buildContent();

      // ✅ 서버 스펙: content min 50 chars
      if (content.trim().length < 50) {
        setSubmitError('기여 본문은 최소 50자 이상 작성해주세요.');
        return;
      }

      const body = {
        projectId,
        recipientId,
        content:
          '테스트 후기입니다....(50자 이상)31253481528451278458121111111111111111111111111',
      };

      const res = await testimonialApi.createTestimonial(body as any);
      console.log(res);

      setShowSuccess(true);
    } catch (e: any) {
      const status = e?.response?.status;
      const msg =
        e?.response?.data?.message ??
        e?.response?.data?.error ??
        `제출에 실패했어요. (${status ?? 'unknown'})`;
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <NewTestimonialSkeleton />;
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
                <h1 className="font-semibold text-foreground">기여 작성</h1>
                <p className="text-sm text-muted-foreground">
                  프로젝트 #{projectId}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>제출 후 24시간 동안 수정할 수 있어요</span>
            </div>
          </div>
        </div>
      </header>

      {/* RecipientInfo (원하면 recipientId를 prop으로 내려줘서 내부 fetch 가능) */}
      <RecipientInfo participant={recipient} />

      {/* submit error */}
      {submitError && (
        <div className="max-w-4xl mx-auto px-6">
          <div className="mt-4 p-3 rounded-lg border border-destructive/30 bg-destructive/10 text-sm text-destructive">
            {submitError}
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <ProgressIndicator answers={answers} questions={questions} />

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

        <div className="mt-8 p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">안내:</strong> 제출 후 24시간
            이내에는 기여 내용을 수정할 수 있어요. 그 이후에는 수정 시 프로젝트
            관리자 승인이 필요합니다.
          </p>
        </div>
      </main>

      <BottomActions
        requiredAnswered={requiredAnswered}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting as any}
      />

      <SuccessModal
        open={showSuccess}
        onOpenChange={setShowSuccess}
        recipientName={recipient?.fullName}
        projectId={projectId}
      />

      <div className="h-24" />
    </div>
  );
}
