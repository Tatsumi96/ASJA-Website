import { failure, success, type Result } from "@/core/result";
import type { AuthRepository } from "./auth_repo";
import type { AuthService } from "./auth_service";
import type { LoginDto } from "./logInDto";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private service: AuthService) {}

  async logIn(loginData: LoginDto): Promise<Result<void>> {
    try {
      this.service.logIn(loginData);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }
}
