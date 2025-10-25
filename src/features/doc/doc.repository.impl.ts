import { failure, success, type Result } from '@/core/result';
import type { DocEntity } from './doc.entity';
import type { DocFileRepository } from './doc.repository';
import type { DocService } from './doc.service';
import { ApiSource } from '@/core/constant';
import type { DocDto } from './doc.dto';

export class DocRepositoryImpl implements DocFileRepository {
  constructor(private service: DocService) {}

  async getFile(
    page: number = 1,
    limit: number = 5
  ): Promise<Result<DocEntity[]>> {
    try {
      const result = await this.service.getFile(page, limit);
      const docList: DocEntity[] = result.map((item) => ({
        fileName: item.fileName,
        author: item.author,
        lessonTitle: item.lessonTitle,
        id: item.id,
        fileSize: item.fileSize,
        fileUrl: `${ApiSource.url}/doc/stream/${item.fileName}`,
      }));
      return success(docList);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }

  async sendFiles(file: FormData): Promise<Result<void>> {
    try {
      await this.service.sendFiles(file);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(Error());
    }
  }

  async sendMetaData(doc: DocDto): Promise<Result<void>> {
    try {
      await this.service.sendMetaData(doc);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }

  async delete(id: string, fileName: string): Promise<Result<void>> {
    try {
      await this.service.delete(id, fileName);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
