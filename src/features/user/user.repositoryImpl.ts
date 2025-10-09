import { failure, success, type Result } from "@/core/result";
import type { UserDto } from "./user.dto";
import type { UserRepository } from "./user.repository";
import type { UserService } from "./user_service";

export class UserRepositoryImpl implements UserRepository {
  constructor(private service: UserService) {}

  async getData(): Promise<Result<UserDto>> {
    try {
      const result = await this.service.get();
      return success(result);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
