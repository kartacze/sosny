import { Effect } from "effect";
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";
import { SqliteDB } from "../services/db/db";

type DBState =
  | { state: "ready"; db: SQLite.SQLiteDatabase }
  | { db: undefined; state: "waiting" | "error" };

export const useSqliteController = (): DBState => {
  const [state, setState] = useState<DBState>({
    state: "waiting",
    db: undefined,
  });

  useEffect(() => {
    const db = Effect.runSyncExit(new SqliteDB().open());

    if (db._tag === "Failure") {
      setState({ state: "error", db: undefined });
    } else {
      setState({ state: "ready", db: db.value });
    }
  }, []);

  return state;
};
