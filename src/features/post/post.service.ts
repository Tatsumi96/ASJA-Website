import type { AxiosInstance } from 'axios';
import type { PostDto } from './post.dto';
import type { GetPostInputType, PostEntity } from './post.entity';
import { ApiSource } from '@/core/constant';

export abstract class PostService {
  abstract create(post: PostEntity): Promise<{ id: string; date: string }>;
  abstract get(params: GetPostInputType): Promise<PostDto[]>;
  abstract sendFiles(file: FormData): Promise<void>;
  abstract delete(id: string, fileName: string): Promise<void>;
}

export class PostServiceImpl implements PostService {
  constructor(private api: AxiosInstance) {}

  async create(post: PostEntity): Promise<{ id: string; date: string }> {
    const response = await this.api.post(`${ApiSource.url}/post`, post);
    if (response.status != 201) throw new Error();
    return response.data;
  }

  async get(params: GetPostInputType): Promise<PostDto[]> {
    const response = await this.api.get(`${ApiSource.url}/post`, {
      params: params,
    });
    if (response.status != 200) throw new Error();
    return response.data;
  }

  async sendFiles(file: FormData): Promise<void> {
    const response = await this.api.post(
      `${ApiSource.url}/post/payload`,
      file,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    if (response.status != 200) throw new Error();
  }
  async delete(id: string, fileName: string): Promise<void> {
    const response = await this.api.delete(
      `${ApiSource.url}/mention?id=${id}&fileName=${fileName}`
    );
    if (response.status != 200) throw new Error();
  }
}
