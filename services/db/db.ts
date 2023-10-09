import * as SQLite from "expo-sqlite";
import { Effect } from "effect";

import { DB_NAME, DB_VERSION } from "./constants";

class SqliteDBError {
  readonly _tag = "SqliteDBError";
}

export class SqliteDB {
  open() {
    return Effect.try({
      try: () => SQLite.openDatabase(DB_NAME, DB_VERSION),
      catch: (error) => {
        console.log("error");
        console.log(error);
        return new SqliteDBError();
      },
    });
  }
}
