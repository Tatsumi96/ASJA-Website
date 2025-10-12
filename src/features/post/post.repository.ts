import type { Result } from '@/core/result';
import type { GetPostInputType, PostEntity } from './post.entity';
import type { PostDto } from './post.dto';

export abstract class PostRepository {
  abstract create(post: PostEntity): Promise<Result<void>>;
  abstract get(params: GetPostInputType): Promise<Result<PostDto[]>>;
  abstract sendFiles(file: FormData): Promise<Result<void>>;
}
