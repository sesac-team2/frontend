import { useState } from 'react';
import { Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import RecipientInfo from './components/RecipientInfo';
import ProgressIndicator from './components/ProgressIndicator';
import QuestionCard from './components/QuestionCard';
import BottomActions from './components/BottomActions';
import SuccessModal from './components/SuccessModal';
import { questions, mockParticipant } from './data';

export default function NewTestimonialPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const requiredAnswered = questions
    .filter((q) => q.required)
    .every((q) => answers[q.id]?.trim());

  const handleSubmit = () => {
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/projects/1"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-semibold text-foreground">
                  Write Testimonial
                </h1>
                <p className="text-sm text-muted-foreground">
                  {mockParticipant.project}
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
                setAnswers({ ...answers, [question.id]: value })
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
