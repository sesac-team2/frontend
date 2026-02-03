import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Question {
  id: string;
  category: string;
  question: string;
  placeholder: string;
  required: boolean;
}

const questions: Question[] = [
  {
    id: '1',
    category: 'Contribution',
    question: "What were this person's main contributions to the project?",
    placeholder:
      'Describe specific tasks, deliverables, or areas they worked on...',
    required: true,
  },
  {
    id: '2',
    category: 'Collaboration',
    question: 'How did they collaborate with others on the team?',
    placeholder:
      'Share examples of teamwork, communication, or support they provided...',
    required: true,
  },
  {
    id: '3',
    category: 'Strengths',
    question: 'What skills or qualities stood out during this project?',
    placeholder:
      'Highlight specific strengths, expertise, or positive behaviors...',
    required: true,
  },
  {
    id: '4',
    category: 'Impact',
    question: "What impact did their work have on the project's success?",
    placeholder: 'Describe outcomes, improvements, or value they created...',
    required: false,
  },
  {
    id: '5',
    category: 'Growth',
    question: 'Did you observe any growth or learning during the project?',
    placeholder:
      'Share any skills they developed or challenges they overcame...',
    required: false,
  },
];

const mockParticipant = {
  name: 'Sarah Chen',
  role: 'Designer',
  project: 'E-commerce Platform Redesign',
};

export default function NewTestimonialPage() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const requiredAnswered = questions
    .filter((q) => q.required)
    .every((q) => answers[q.id]?.trim());

  const answeredCount = Object.values(answers).filter((a) => a.trim()).length;

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

      {/* Recipient info */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="flex items-center gap-4">
            <Avatar className="w-14 h-14">
              <AvatarFallback className="text-lg bg-accent text-accent-foreground">
                {mockParticipant.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {mockParticipant.name}
              </h2>
              <p className="text-muted-foreground">{mockParticipant.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Progress indicator */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              {answeredCount} of {questions.length} questions answered
            </p>
          </div>
          <div className="flex items-center gap-1">
            {questions.map((q) => (
              <div
                key={q.id}
                className={`w-8 h-1.5 rounded-full transition-colors ${
                  answers[q.id]?.trim() ? 'bg-accent' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>

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

      {/* Fixed bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-sm">
            {!requiredAnswered && (
              <span className="text-muted-foreground">
                Please answer all required questions
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <Link to="/projects/1">Save Draft</Link>
            </Button>
            <Button
              disabled={!requiredAnswered}
              onClick={handleSubmit}
              className="min-w-40"
            >
              Submit Testimonial
            </Button>
          </div>
        </div>
      </div>

      {/* Success modal */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-success" />
            </div>
          </div>
          <DialogHeader className="text-center">
            <DialogTitle className="text-center">
              Testimonial Submitted!
            </DialogTitle>
            <DialogDescription className="text-center">
              Your testimonial for {mockParticipant.name} has been saved. You
              can edit it within the next 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild>
              <Link to="/projects/1">Back to Project</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link to="/contributions">View My Contributions</Link>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Spacer for fixed bottom */}
      <div className="h-24" />
    </div>
  );
}

function QuestionCard({
  question,
  index,
  value,
  onChange,
}: {
  question: Question;
  index: number;
  value: string;
  onChange: (value: string) => void;
}) {
  const charCount = value.length;
  const isAnswered = value.trim().length > 0;

  return (
    <div
      className={`p-6 rounded-xl border transition-colors ${
        isAnswered ? 'border-accent/30 bg-accent/5' : 'border-border bg-card'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-3">
          <span className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground shrink-0">
            {index + 1}
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs font-normal">
                {question.category}
              </Badge>
              {question.required && (
                <span className="text-xs text-destructive">Required</span>
              )}
            </div>
            <h3 className="font-medium text-foreground">{question.question}</h3>
          </div>
        </div>
        {isAnswered && <CheckCircle className="w-5 h-5 text-accent shrink-0" />}
      </div>

      <div className="ml-10">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={question.placeholder}
          className="min-h-30 resize-none text-base"
        />
        <div className="flex justify-end mt-2">
          <span
            className={`text-xs ${charCount > 500 ? 'text-warning' : 'text-muted-foreground'}`}
          >
            {charCount} characters
          </span>
        </div>
      </div>
    </div>
  );
}
