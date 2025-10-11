import { PostRepository } from './post.repository';
import type { PostDto } from './post.dto';
import { failure, success, type Result } from '@/core/result';
import type { GetPostInputType, PostEntity } from './post.entity';
import type { PostService } from './post.service';
import { ApiSource } from '@/core/constant';

export class PostRepositoryImpl implements PostRepository {
  constructor(private service: PostService) {}

  async create(post: PostEntity): Promise<Result<void>> {
    try {
      await this.service.create(post);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
  async get(params: GetPostInputType): Promise<Result<PostDto[]>> {
    try {
      const result = await this.service.get(params);
      const post: PostDto[] = result.map((item) => ({
        title: item.title,
        imageUrl: item.imageUrl
          ? `${ApiSource.url}/post/stream/${item.imageUrl}`
          : undefined,
        description: item.description,
        date: item.date,
        id: item.id,
      }));
      return success(post);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
