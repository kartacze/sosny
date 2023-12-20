import * as S from "@effect/schema/Schema";

export const walletSchema = S.struct({
  id: S.string.pipe(S.nonEmpty()),
  type: S.string.pipe(S.nonEmpty()),
  currency: S.string.pipe(S.nonEmpty()),
  name: S.string.pipe(S.nonEmpty()),
  quantity: S.JsonNumber.pipe(S.nonEmpty()),
  tens: S.JsonNumber.pipe(S.nonEmpty())
});

export type Wallet = S.Schema.To<typeof walletSchema>;

