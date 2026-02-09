import { rest } from 'msw';

export const handlers = [
  // ✅ 프로젝트 목록
  rest.get('/projects', (req, res, ctx) => {
    const data = [
      {
        id: '1',
        name: 'Mock Project1',
        description: 'mock project1',
        status: 'in_progress',
        startDate: '2025-10-01',
        endDate: '2026-03-31',
        participantCount: 2,
        testimonialCount: 1,
      },
      {
        id: '2',
        name: 'Mock Project2',
        description: 'mock project2',
        status: 'completed',
        startDate: '2025-01-01',
        endDate: '2025-03-01',
        participantCount: 3,
        testimonialCount: 5,
      },
      {
        id: '3',
        name: 'Mock Project3',
        description: 'Mock Project3',
        status: 'completed',
        startDate: '2025-01-01',
        endDate: '2025-03-01',
        participantCount: 4,
        testimonialCount: 4,
      },
    ];

    return res(
      ctx.json({
        data,
        meta: {
          total: data.length,
          page: 1,
          limit: 20,
        },
      }),
    );
  }),

  // ✅ 프로젝트 상세 (id별로 다르게)
  rest.get('/projects/:id', (req, res, ctx) => {
    const { id } = req.params;

    if (!['1', '2', '3'].includes(id as string)) {
      return res(ctx.status(404));
    }

    return res(
      ctx.json({
        id,
        name: `Mock Project ${id}`,
        description: `mock project ${id}`,
        status: Number(id) % 2 === 0 ? 'completed' : 'inProgress',
        startDate: '2025-01-01',
        endDate: '2025-03-01',
        creator: {
          id: 'c1',
          fullName: 'John Doe',
        },
        members: Array.from({ length: 3 }).map((_, i) => ({
          userId: `${id}-${i + 1}`,
          fullName: `User ${i + 1}`,
          role: 'member',
          avatarUrl: undefined,
        })),
      }),
    );
  }),
];
