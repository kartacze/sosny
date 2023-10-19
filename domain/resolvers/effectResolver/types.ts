import * as S from "@effect/schema/Schema";
import {
  FieldError,
  FieldValues,
  ResolverOptions,
  ResolverResult,
} from "react-hook-form";

export type Resolver = <T extends S.Schema<any, any>>(
  schema: T,
) => <TFieldValues extends FieldValues, TContext>(
  values: TFieldValues,
  _context: TContext | undefined,
  options: ResolverOptions<TFieldValues>,
) => ResolverResult<TFieldValues>;

export type ErrorObject = Record<string, FieldError>;
export type FieldErrorWithPath = FieldError & { path: string };
