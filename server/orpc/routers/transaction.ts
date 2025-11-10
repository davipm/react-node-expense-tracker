import z from 'zod';
import { publicProcedure } from '@/server/orpc';
import { prisma } from '@/server/prisma';

export const transactionSchema = z.object({
  text: z.string().min(1, 'Please add some text').trim(),
  amount: z.number().refine((val) => val !== 0, 'Please add a positive or negative number'),
});

export const transactionRouter = {
  getAll: publicProcedure.handler(async () => {
    return prisma.transaction.findMany();
  }),

  create: publicProcedure.input(transactionSchema).handler(async ({ input }) => {
    return prisma.transaction.create({
      data: {
        text: input.text,
        amount: input.amount,
      },
    });
  }),

  delete: publicProcedure.input(z.object({ id: z.number() })).handler(async ({ input }) => {
    return prisma.transaction.delete({
      where: { id: input.id },
    });
  }),
};
