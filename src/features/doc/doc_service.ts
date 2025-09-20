import type { AxiosInstance } from "axios";
import type { DocEntity } from "./doc.entity";
import { ApiSource } from "@/core/constant";

export abstract class DocService {
  abstract getDocFile(page: number, limit: number): Promise<DocEntity[]>;
}

export class DocServiceImpl implements DocService {
  constructor(private apiService: AxiosInstance) {}

  async getDocFile(page: number, limit: number): Promise<DocEntity[]> {
    try {
      const response = await this.apiService.get(
        `${ApiSource.url}/doc?page=${page}&limit=${limit}`
      );
      if (response.status != 200) throw new Error();
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
}
