import type { AxiosInstance } from "axios";
import type { LogEntity } from "./log.entity";
import { ApiSource } from "@/core/constant";

export abstract class LogService {
  abstract get(page: number, limit: number): Promise<LogEntity[]>;
}

export class LogServiceImpl implements LogService {
  constructor(private service: AxiosInstance) {}

  async get(page: number, limit: number): Promise<LogEntity[]> {
    const response = await this.service.get(
      `${ApiSource.url}/logs?page=${page}&limit=${limit}`
    );
    if (response.status != 200) throw new Error();
    return response.data;
  }
}
