import type { AuthRepository } from "../auth_repo";
import type { LoginDto } from "../logInDto";

export class LogUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(loginData: LoginDto) {
    return this.repository.logIn(loginData);
  }
}
