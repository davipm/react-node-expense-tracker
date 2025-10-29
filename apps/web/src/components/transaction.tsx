import { numberWithCommas } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";

type Props = {
  id: number;
  text: string;
  amount: number;
  createAt?: Date;
};

export function Transaction({ id, text, amount }: Props) {
  const queryClient = useQueryClient();

  const { mutate: deleteTransaction, isPending } = useMutation(
    orpc.transaction.delete.mutationOptions({
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: orpc.transaction.key({ type: "query" }),
        });
      },
    }),
  );

  return (
    <li className="flex justify-between items-center relative my-2.5 p-2.5 text-[#333] bg-white shadow-md">
      {text}{" "}
      <span className="hover:cursor-pointer">
        {amount < 0 ? "-" : "+"}${numberWithCommas(String(Math.abs(amount)))}
      </span>
      <Button
        variant="destructive"
        disabled={isPending}
        onClick={() => deleteTransaction({ id })}
      >
        {isPending ? "..." : "X"}
      </Button>
    </li>
  );
}
