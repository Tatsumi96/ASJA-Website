import { failure, success, type Result } from '@/core/result';
import type { UserDto } from './user.dto';
import type { UserRepository } from './user.repository';
import type { UserService } from './user.service';
import { ApiSource } from '@/core/constant';
import type { UpdateDto } from './udpate.dto';

export class UserRepositoryImpl implements UserRepository {
  constructor(private service: UserService) {}

  async getData(): Promise<Result<UserDto>> {
    try {
      const result = await this.service.get();
      const userData: UserDto = {
        identifier: result.identifier,
        imageUrl: result.imageUrl
          ? `${ApiSource.url}/mention/stream/${result.imageUrl}`
          : undefined,
        name: result.name,
        lastName: result.lastName,
        branche: result.branche,
        level: result.level,
        Premier: result.Premier,
        Deuxieme: result.Deuxieme,
        Troisieme: result.Troisieme,
        contact: result.contact,
        mention: result.mention,
      };
      return success(userData);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }

  async update(user: UpdateDto): Promise<Result<void>> {
    try {
      await this.service.update(user);
      return success(undefined);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
