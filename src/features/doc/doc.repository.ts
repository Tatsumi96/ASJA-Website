import type { Result } from "@/core/result";
import type { DocEntity } from "./doc.entity";

export abstract class DocFileRepository {
  abstract getDocFile(
    page: number,
    limit: number
  ): Promise<Result<DocEntity[]>>;
}
