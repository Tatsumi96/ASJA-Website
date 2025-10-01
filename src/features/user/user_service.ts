import type { AxiosInstance } from "axios";
import type { UserDto } from "./user.dto";
import { ApiSource } from "@/core/constant";
import type { UserEntity } from "./user.entity";

export abstract class UserService {
  abstract get(): Promise<UserDto>;
  abstract register(user: UserEntity): Promise<void>;
}

export class UserServiceImpl implements UserService {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<UserDto> {
    const response = await this.api.get(`${ApiSource.url}/user`);
    if (response.status != 200) throw new Error();
    return response.data;
  }

  async register(user: UserEntity): Promise<void> {
    const response = await this.api.post(`${ApiSource.url}/user/signin`, user);
    if (response.status != 200) throw new Error();
  }
}
