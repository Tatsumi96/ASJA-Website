import type { Result } from "@/core/result";
import type { LogEntity } from "./log.entity";

export abstract class LogRepository {
  abstract get(): Promise<Result<LogEntity[]>>;
}
