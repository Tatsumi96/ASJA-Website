import type { AxiosInstance } from "axios";
import type { LogEntity } from "./log.entity";
import { ApiSource } from "@/core/constant";

export abstract class LogService {
  abstract get(): Promise<LogEntity[]>;
}

export class LogServiceImpl implements LogService {
  constructor(private service: AxiosInstance) {}

  async get(): Promise<LogEntity[]> {
    const response = await this.service.get(`${ApiSource.url}/logs`);
    if (response.status != 200) throw new Error();
    return response.data;
  }
}
