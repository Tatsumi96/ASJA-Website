import type { Result } from '@/core/result';
import type { DocEntity } from './doc.entity';
import type { DocDto } from './doc.dto';

export abstract class DocFileRepository {
  abstract getFile(page: number, limit: number): Promise<Result<DocEntity[]>>;
  abstract sendFiles(file: FormData): Promise<Result<void>>;
  abstract sendMetaData(doc: DocDto): Promise<Result<void>>;
  abstract delete(id: string, fileName: string): Promise<Result<void>>;
}
