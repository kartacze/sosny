import "../global";
import * as S from "@effect/schema/Schema";

export const transactionSchema = S.struct({
  debitor: S.string.pipe(S.nonEmpty()),
  creditor: S.string.pipe(S.nonEmpty()),
  amount: S.string.pipe(S.nonEmpty()),
  currency: S.string.pipe(S.nonEmpty()),
  note: S.optional(S.string.pipe(S.nonEmpty())),
  date: S.string.pipe(S.nonEmpty()),
});

export type TransactionForm = S.Schema.To<typeof transactionSchema>;

export interface Transaction extends TransactionForm {}
