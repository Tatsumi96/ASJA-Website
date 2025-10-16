import type { Result } from '@/core/result';
import type { UserDto } from './user.dto';
import type { UpdateDto } from './udpate.dto';

export abstract class UserRepository {
  abstract getData(): Promise<Result<UserDto>>;
  abstract update(user: UpdateDto): Promise<Result<void>>;
}
