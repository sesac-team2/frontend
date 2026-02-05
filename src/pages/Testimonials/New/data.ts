export interface Question {
  id: string;
  category: string;
  question: string;
  placeholder: string;
  required: boolean;
}

export const questions: Question[] = [
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

export const mockParticipant = {
  name: 'Sarah Chen',
  role: 'Designer',
  project: 'E-commerce Platform Redesign',
};
