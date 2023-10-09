import * as S from "@effect/schema/Schema";

export const transactionSchema = S.struct({
  debitor: S.string,
  creditor: S.string,
  amount: S.number,
  currency: S.string,
});

export interface Transaction extends S.Schema.To<typeof transactionSchema> {}
