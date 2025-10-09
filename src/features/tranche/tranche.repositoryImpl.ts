import { TrancheRepository } from "./tranche.repository";
import { TrancheService } from "./tranche.service.prisma";
import type { TrancheDto } from "./tranche.dto";
import { failure, success, type Result } from "@/core/result";

export class TrancheRepositoryImpl implements TrancheRepository {
  constructor(private service: TrancheService) {}

  async update(dto: TrancheDto): Promise<Result<void>> {
    try {
      await this.service.update(dto);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
