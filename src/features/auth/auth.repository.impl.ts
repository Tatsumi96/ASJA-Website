import { failure, success, type Result } from '@/core/result';
import type { AuthRepository } from './auth.repository';
import type { AuthService } from './auth.service';
import type { LoginDto } from './login.dto';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private service: AuthService) {}

  async logIn(loginData: LoginDto): Promise<Result<void>> {
    try {
      await this.service.logIn(loginData);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async logOut(): Promise<Result<void>> {
    try {
      await this.service.logOut();
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }
}
