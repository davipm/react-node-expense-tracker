import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { orpc } from "@/utils/orpc";

export const useTransactions = () => {
  const { data: transactions = [], ...rest } = useQuery(
    orpc.transaction.getAll.queryOptions(),
  );

  const { amounts, total } = useMemo(() => {
    const amounts: number[] = transactions.map(
      (transaction) => transaction.amount,
    );
    const total = amounts.reduce((sum, amount) => sum + amount, 0);

    return {
      amounts,
      total: total.toFixed(2),
    };
  }, [transactions]);

  return {
    transactions,
    amounts,
    total,
    ...rest,
  };
};
