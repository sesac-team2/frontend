import type { Testimonial } from '../../../../types/testimonial';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    role: 'Designer',
    project: 'E-Commerce Platform Redesign',
    date: 'Mar 15, 2024',
    avatar: 'SJ',
    avatarColor: 'bg-teal-500',
    content:
      'Sarah demonstrated exceptional design skills throughout the project, creating intuitive user interfaces that significantly improved conversion rates.',
    tags: ['Creative', 'Detail-oriented', 'Collaborative', 'User-focused'],
    bullets: [
      'Led the complete UI/UX redesign with innovative solutions',
      'Collaborated effectively with developers to ensure design feasibility',
      'Conducted user research that informed key design decisions',
    ],
  },
  {
    id: '2',
    author: 'Michael Chen',
    role: 'Developer',
    project: 'Mobile App Development',
    date: 'Dec 20, 2023',
    avatar: 'MC',
    avatarColor: 'bg-emerald-500',
    content:
      'Michael was instrumental in building the core architecture of our mobile app, delivering clean and maintainable code while mentoring junior developers.',
    tags: ['Technical', 'Problem-solver', 'Efficient', 'Mentor'],
    bullets: [
      'Architected scalable mobile app infrastructure',
      'Resolved critical performance bottlenecks',
      'Mentored team members on best practices',
    ],
  },
];

export interface Keyword {
  name: string;
  count: number;
  total: number;
}

export const KEYWORDS: Keyword[] = [
  { name: 'Collaborative', count: 24, total: 30 },
  { name: 'Innovative', count: 19, total: 30 },
  { name: 'Problem-solver', count: 17, total: 30 },
  { name: 'Detail-oriented', count: 15, total: 30 },
  { name: 'Leadership', count: 13, total: 30 },
  { name: 'Technical', count: 12, total: 30 },
  { name: 'Creative', count: 11, total: 30 },
  { name: 'Efficient', count: 10, total: 30 },
];
