import type { AxiosInstance } from 'axios';
import type { DocEntity } from './doc.entity';
import { ApiSource } from '@/core/constant';
import type { DocDto } from './doc.dto';

export abstract class DocService {
  abstract getFile(page: number, limit: number): Promise<DocEntity[]>;
  abstract sendFiles(file: FormData): Promise<void>;
  abstract sendMetaData(doc: DocDto): Promise<void>;
  abstract delete(id: string, fileName: string): Promise<void>;
}

export class DocServiceImpl implements DocService {
  constructor(private apiService: AxiosInstance) {}

  async getFile(page: number, limit: number): Promise<DocEntity[]> {
    const response = await this.apiService.get(
      `${ApiSource.url}/doc?page=${page}&limit=${limit}`
    );
    if (response.status != 200) throw new Error();
    return response.data;
  }

  async sendFiles(file: FormData): Promise<void> {
    const response = await this.apiService.post(
      `${ApiSource.url}/doc/payload`,
      file,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    if (response.status != 200) throw new Error();
  }

  async sendMetaData(doc: DocDto): Promise<void> {
    const response = await this.apiService.post(
      `${ApiSource.url}/doc/metadata`,
      doc
    );

    if (response.status != 201) throw new Error();
  }

  async delete(id: string, fileName: string): Promise<void> {
    const response = await this.apiService.delete(
      `${ApiSource.url}/doc?id=${id}&fileName=${fileName}`
    );
    if (response.status != 200) throw new Error();
  }
}
