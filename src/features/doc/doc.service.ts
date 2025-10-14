import type { AxiosInstance } from 'axios';
import { ApiSource } from '@/core/constant';
import type { DocDto } from './doc.dto';
import type { DocEntity } from './doc.entity';

export abstract class DocService {
  abstract getFile(page: number, limit: number): Promise<DocDto[]>;
  abstract sendFiles(file: FormData): Promise<void>;
  abstract sendMetaData(doc: DocEntity): Promise<{ id: string }>;
  abstract delete(id: string, fileName: string): Promise<void>;
}

export class DocServiceImpl implements DocService {
  constructor(private apiService: AxiosInstance) {}

  async getFile(page: number, limit: number): Promise<DocDto[]> {
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

  async sendMetaData(doc: DocEntity): Promise<{ id: string }> {
    const response = await this.apiService.post(
      `${ApiSource.url}/doc/metadata`,
      doc
    );

    if (response.status != 201) throw new Error();
    return response.data;
  }

  async delete(id: string, fileName: string): Promise<void> {
    const response = await this.apiService.delete(
      `${ApiSource.url}/doc?id=${id}&fileName=${fileName}`
    );
    if (response.status != 200) throw new Error();
  }
}
