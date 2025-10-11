import type { AxiosInstance } from 'axios';
import type { PostDto } from './post.dto';
import type { GetPostInputType, PostEntity } from './post.entity';
import { ApiSource } from '@/core/constant';

export abstract class PostService {
  abstract create(post: PostEntity): Promise<void>;
  abstract get(params: GetPostInputType): Promise<PostDto[]>;
}

export class PostServiceImpl implements PostService {
  constructor(private api: AxiosInstance) {}

  async create(post: PostEntity): Promise<void> {
    const response = await this.api.post(`${ApiSource.url}/post`, post);
    if (response.status != 201) throw new Error();
  }

  async get(params: GetPostInputType): Promise<PostDto[]> {
    const response = await this.api.get(`${ApiSource.url}/post`, {
      params: params,
    });
    if (response.status != 200) throw new Error();
    return response.data;
  }
}
