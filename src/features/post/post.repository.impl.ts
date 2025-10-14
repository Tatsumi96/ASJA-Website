import { PostRepository } from './post.repository';
import type { PostDto } from './post.dto';
import { failure, success, type Result } from '@/core/result';
import type { GetPostInputType, PostEntity } from './post.entity';
import type { PostService } from './post.service';
import { ApiSource } from '@/core/constant';

export class PostRepositoryImpl implements PostRepository {
  constructor(private service: PostService) {}

  async create(post: PostEntity): Promise<Result<PostDto>> {
    try {
      const result = await this.service.create(post);
      const postDto: PostDto = {
        title: post.title,
        imageUrl: post.imageUrl
          ? `${ApiSource.url}/post/stream/${post.imageUrl}`
          : undefined,
        description: post.description,
        date: result.date,
        id: result.id,
        level: post.level,
        branche: post.branche,
        mention: post.mention,
        fileName: post.imageUrl,
      };

      return success(postDto);
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
        level: item.level,
        branche: item.branche,
        mention: item.mention,
        fileName: item.imageUrl,
      }));
      return success(post);
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
