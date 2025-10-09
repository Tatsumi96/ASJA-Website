import { ApiSource } from "@/core/constant";
import type { AxiosInstance } from "axios";
import type { TrancheDto } from "./tranche.dto";

export abstract class TrancheService {
  abstract update(dto: TrancheDto): Promise<void>;
}

export class TrancheServiceImpl implements TrancheService {
  constructor(private api: AxiosInstance) {}

  async update(dto: TrancheDto): Promise<void> {
    const response = await this.api.put(`${ApiSource.url}/tranche`, dto);
    if (response.status != 200) throw new Error();
  }
}
