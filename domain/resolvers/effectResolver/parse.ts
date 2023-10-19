import {
  Key,
  ParseError,
  ParseErrors,
} from "@effect/schema/dist/declarations/src/ParseResult";
import { FieldErrors } from "react-hook-form";

const mapErrorToMessage = (effectError: ParseErrors): string => {
  return effectError._tag;
};

export const toHookFormError = (source: ParseError): FieldErrors => {
  const filtered = source.errors.filter((errs) => errs._tag === "Key") as Key[];

  const response = filtered.map((err) => ({
    key: String(err.key),
    message: err.errors.map((err) => mapErrorToMessage(err))[0],
  }));

  return response as unknown as FieldErrors;
};
