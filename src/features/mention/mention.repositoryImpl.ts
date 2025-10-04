import { failure, success, type Result } from "@/core/result";
import { MentionRepository } from "./mention.repository";
import type { MentionDto } from "./mention.dto";
import type { UserEntity } from "./user.entity";
import type { MentionService } from "./mention.service";

export class MentionRepositoryImpl implements MentionRepository {
  constructor(private service: MentionService) {}

  async getData(): Promise<Result<MentionDto[]>> {
    try {
      const result = await this.service.get();
      return success(result);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }

  async register(user: UserEntity): Promise<Result<void>> {
    try {
      await this.service.register(user);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
