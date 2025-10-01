import type { Result } from "@/core/result";
import type { UserDto } from "./user.dto";
import type { UserEntity } from "./user.entity";

export abstract class UserRepository {
  abstract getData(): Promise<Result<UserDto>>;
  abstract register(user: UserEntity): Promise<Result<void>>;
}
