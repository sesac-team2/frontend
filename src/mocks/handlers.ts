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
        start_date: '2025-10-01',
        end_date: '2026-03-31',
        participant_count: 2,
        testimonial_count: 1,
      },
      {
        id: '2',
        name: 'Mock Project2',
        description: 'mock project2',
        status: 'completed',
        start_date: '2025-01-01',
        end_date: '2025-03-01',
        participant_count: 3,
        testimonial_count: 5,
      },
      {
        id: '3',
        name: 'Mock Project3',
        description: 'Mock Project3',
        status: 'completed',
        start_date: '2025-01-01',
        end_date: '2025-03-01',
        participant_count: 4,
        testimonial_count: 4,
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

    // (선택) 목록에 없는 id로 접근하면 404처럼 동작
    if (!['1', '2', '3'].includes(id as string)) {
      return res(ctx.status(404));
    }

    return res(
      ctx.json({
        id,
        name: `Mock Project ${id}`,
        description: `mock project ${id}`,
        status: Number(id) % 2 === 0 ? 'completed' : 'in_progress',
        start_date: '2025-01-01',
        end_date: '2025-03-01',
        creator: {
          id: 'c1',
          full_name: 'John Doe',
        },
        members: Array.from({ length: 3 }).map((_, i) => ({
          user_id: `${id}-${i + 1}`, // ✅ user_id 유니크하게
          full_name: `User ${i + 1}`,
          role: 'member',
          avatar_url: undefined,
        })),
      }),
    );
  }),
];
