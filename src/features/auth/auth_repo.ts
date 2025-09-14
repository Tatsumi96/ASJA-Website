import type { Result } from "@/core/result";
import type { LoginDto } from "./logInDto";

export abstract class AuthRepository {
  abstract logIn(loginData: LoginDto): Promise<Result<void>>;
}
