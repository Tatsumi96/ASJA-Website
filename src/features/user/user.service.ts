import type { AxiosInstance } from "axios";
import type { UserDto } from "./user.dto";
import { ApiSource } from "@/core/constant";

export abstract class UserService {
  abstract get(): Promise<UserDto>;
}

export class UserServiceImpl implements UserService {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<UserDto> {
    const response = await this.api.get(`${ApiSource.url}/user`);
    if (response.status != 200) throw new Error();
    return response.data;
  }
}
