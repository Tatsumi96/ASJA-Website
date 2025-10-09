import type { Result } from "@/core/result";
import type { UserDto } from "./user.dto";

export abstract class UserRepository {
  abstract getData(): Promise<Result<UserDto>>;
}
