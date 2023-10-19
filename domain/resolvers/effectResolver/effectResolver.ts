import * as S from "@effect/schema/Schema";
import * as E from "effect/Either";

import { Resolver as MyResolver } from "./types";
import { pipe } from "effect";
import { toHookFormError } from "./parse";

export const effectResolver: MyResolver = (schema) => (values, _context) => {
  return pipe(
    values,
    S.parseEither(schema),
    E.match({
      onLeft: (errors) => ({
        values: {},
        errors: toHookFormError(errors),
      }),
      onRight: (values) => {
        return {
          values,
          errors: {},
        } as any;
      },
    }),
  );
};
