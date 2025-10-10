import type { Result } from "@/core/result";
import type { LogEntity } from "./log.entity";

export abstract class LogRepository {
  abstract get(page: number, limit: number): Promise<Result<LogEntity[]>>;
}
