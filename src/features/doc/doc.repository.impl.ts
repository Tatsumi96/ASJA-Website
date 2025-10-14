import { failure, success, type Result } from '@/core/result';
import type { DocFileRepository } from './doc.repository';
import type { DocService } from './doc.service';
import { ApiSource } from '@/core/constant';
import type { DocDto } from './doc.dto';
import type { DocEntity } from './doc.entity';

export class DocRepositoryImpl implements DocFileRepository {
  constructor(private service: DocService) {}

  async getFile(
    page: number = 1,
    limit: number = 5
  ): Promise<Result<DocDto[]>> {
    try {
      const result = await this.service.getFile(page, limit);
      const docList: DocDto[] = result.map((item) => ({
        fileName: item.fileName,
        lessonTitle: item.lessonTitle,
        id: item.id,
        fileUrl: `${ApiSource.url}/doc/stream/${item.fileName}`,
        mention: item.mention,
        level: item.level,
        branche: item.branche,
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

  async sendMetaData(doc: DocEntity): Promise<Result<DocDto>> {
    try {
      const result = await this.service.sendMetaData(doc);
      const docData: DocDto = {
        fileName: doc.fileName,
        lessonTitle: doc.lessonTitle,
        id: result.id,
        mention: doc.mention,
        level: doc.level,
        branche: doc.branche,
      };
      return success(docData);
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
