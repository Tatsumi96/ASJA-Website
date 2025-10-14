import type { Result } from '@/core/result';
import type { DocDto } from './doc.dto';
import type { DocEntity } from './doc.entity';

export abstract class DocFileRepository {
  abstract getFile(page: number, limit: number): Promise<Result<DocDto[]>>;
  abstract sendFiles(file: FormData): Promise<Result<void>>;
  abstract sendMetaData(doc: DocEntity): Promise<Result<DocDto>>;
  abstract delete(id: string, fileName: string): Promise<Result<void>>;
}
