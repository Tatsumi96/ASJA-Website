import type { AxiosInstance } from 'axios';
import type { UserDto } from './user.dto';
import { ApiSource } from '@/core/constant';
import type { UpdateDto } from './udpate.dto';

export abstract class UserService {
  abstract get(): Promise<UserDto>;
  abstract update(user: UpdateDto): Promise<void>;
}

export class UserServiceImpl implements UserService {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<UserDto> {
    const response = await this.api.get(`${ApiSource.url}/student`);
    if (response.status != 200) throw new Error();
    return response.data;
  }

  async update(user: UpdateDto): Promise<void> {
    const response = await this.api.put(`${ApiSource.url}/student`, user);
    if (response.status != 200) throw new Error();
  }
}
