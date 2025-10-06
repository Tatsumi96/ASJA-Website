import type { AxiosInstance } from "axios";
import { ApiSource } from "@/core/constant";
import type { UserEntity } from "../mention/user.entity";
import type { MentionDto } from "./mention.dto";
import type { UserDto } from "./user.dto";

export abstract class MentionService {
  abstract get(): Promise<MentionDto>;
  abstract register(user: UserEntity): Promise<void>;
  abstract getStudentData(page: number, limit: number): Promise<UserDto[]>;
}

export class MentionServiceImpl implements MentionService {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<MentionDto> {
    const response = await this.api.get(`${ApiSource.url}/mention`);
    if (response.status != 200) throw new Error();
    return response.data;
  }

  async register(user: UserEntity): Promise<void> {
    const response = await this.api.post(
      `${ApiSource.url}/mention/register`,
      user
    );
    if (response.status != 201) throw new Error();
  }

  async getStudentData(page: number, limit: number): Promise<UserDto[]> {
    const response = await this.api.get(
      `${ApiSource.url}/mention/student?page=${page}&limit=${limit}`
    );
    if (response.status != 200) throw new Error();
    return response.data;
  }
}
