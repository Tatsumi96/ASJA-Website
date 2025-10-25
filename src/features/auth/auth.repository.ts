import type { Result } from '@/core/result';
import type { LoginDto } from './login.dto';

export abstract class AuthRepository {
  abstract logIn(loginData: LoginDto): Promise<Result<void>>;
  abstract logOut(): Promise<Result<void>>;
}
