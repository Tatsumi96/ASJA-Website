import type { Result } from "@/core/result";
import type { TrancheDto } from "./tranche.dto";

export abstract class TrancheRepository {
  abstract update(dto: TrancheDto): Promise<Result<void>>;
}
