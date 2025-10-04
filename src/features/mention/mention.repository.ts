import type { Result } from "@/core/result";
import type { MentionDto } from "./mention.dto";
import type { UserEntity } from "./user.entity";

export abstract class MentionRepository {
  abstract getData(): Promise<Result<MentionDto[]>>;
  abstract register(user: UserEntity): Promise<Result<void>>;
}
