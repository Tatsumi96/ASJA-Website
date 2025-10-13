import type { AxiosInstance } from 'axios';
import { ApiSource } from '@/core/constant';
import type { UserEntity } from '../mention/user.entity';
import type { MentionDto } from './mention.dto';
import type { UserDto } from './user.dto';
import type { RegisterReturnType } from './register.return.type';

export abstract class MentionService {
  abstract get(): Promise<MentionDto>;
  abstract register(user: UserEntity): Promise<RegisterReturnType>;
  abstract getStudentData(page: number, limit: number): Promise<UserDto[]>;
  abstract sendFiles(file: FormData): Promise<void>;
  abstract deleteStudent(id: string, fileName: string): Promise<void>;
  abstract searchStudent(query: string): Promise<UserDto[]>;
}

export class MentionServiceImpl implements MentionService {
  constructor(private api: AxiosInstance) {}

  async get(): Promise<MentionDto> {
    const response = await this.api.get(`${ApiSource.url}/mention`);
    if (response.status != 200) throw new Error();
    return response.data;
  }

  async register(user: UserEntity): Promise<RegisterReturnType> {
    const response = await this.api.post(
      `${ApiSource.url}/mention/register`,
      user
    );
    if (response.status != 201) throw new Error();

    return response.data;
  }

  async getStudentData(page: number, limit: number): Promise<UserDto[]> {
    const response = await this.api.get(
      `${ApiSource.url}/mention/student?page=${page}&limit=${limit}`
    );
    if (response.status != 200) throw new Error();
    return response.data;
  }

  async searchStudent(query: string): Promise<UserDto[]> {
    const response = await this.api.get(
      `${ApiSource.url}/mention/student/?name=${query}`
    );
    if (response.status != 200) throw new Error();
    return response.data;
  }

  async sendFiles(file: FormData): Promise<void> {
    const response = await this.api.post(
      `${ApiSource.url}/mention/payload`,
      file,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    if (response.status != 200) throw new Error();
  }

  async deleteStudent(id: string, fileName: string): Promise<void> {
    const response = await this.api.delete(
      `${ApiSource.url}/mention?id=${id}&fileName=${fileName}`
    );
    if (response.status != 200) throw new Error();
  }
}
