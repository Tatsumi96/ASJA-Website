import type { AxiosInstance } from "axios";
import { ApiSource } from "@/core/constant";
import type { UserEntity } from "../mention/user.entity";
import type { MentionDto } from "./mention.dto";

export abstract class MentionService {
  abstract get(): Promise<MentionDto[]>;
  abstract register(user: UserEntity): Promise<void>;
}

export class MentionServiceImpl implements MentionService {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<MentionDto[]> {
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
}
