import type { RouterClient } from '@orpc/server';
import { publicProcedure } from '@/server/orpc';
import { transactionRouter } from '@/server/orpc/routers/transaction';

export const appRouter = {
  transaction: transactionRouter,
  healthCheck: publicProcedure.handler(() => {
    return 'OK';
  }),
};

export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
