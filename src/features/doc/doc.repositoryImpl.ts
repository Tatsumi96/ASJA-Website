import { failure, success, type Result } from "@/core/result";
import type { DocEntity } from "./doc.entity";
import type { DocFileRepository } from "./doc.repository";
import type { DocService } from "./doc_service";

export class DocRepositoryImpl implements DocFileRepository {
  constructor(private service: DocService) {}

  async getDocFile(
    page: number = 1,
    limit: number = 5
  ): Promise<Result<DocEntity[]>> {
    try {
      const result = await this.service.getDocFile(page, limit);
      return success(result);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
