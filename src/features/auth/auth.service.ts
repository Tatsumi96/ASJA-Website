import type { AxiosInstance } from 'axios';
import type { LoginDto } from './login.dto';
import { ApiSource } from '@/core/constant';

export abstract class AuthService {
  abstract logIn(loginData: LoginDto): Promise<void>;
  abstract logOut(): Promise<void>;
}

export class AuthServiceImpl implements AuthService {
  constructor(private api: AxiosInstance) {}

  async logIn(loginData: LoginDto): Promise<void> {
    const response = await this.api.post(
      `${ApiSource.url}/auth/login`,
      loginData
    );
    if (response.status != 200) throw new Error();
  }

  async logOut(): Promise<void> {
    const response = await this.api.post(`${ApiSource.url}/auth/logout`);
    if (response.status != 200) throw new Error();
  }
}
