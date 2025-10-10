import { failure, success, type Result } from "@/core/result";
import type { LogEntity } from "./log.entity";
import type { LogRepository } from "./log.repository";
import type { LogService } from "./log.service";

export class LogRepositoryImpl implements LogRepository {
  constructor(private service: LogService) {}

  async get(): Promise<Result<LogEntity[]>> {
    try {
      const logs = await this.service.get();
      return success(logs);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
