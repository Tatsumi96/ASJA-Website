import { ApiSource } from '@/core/constant';
import { failure, success, type Result } from '@/core/result';
import type { AdminDto } from './admin.dto';
import type { AdminRepository } from './admin.repository';
import type { AdminService } from './admin.service';

export class AdminRepositoryImpl implements AdminRepository {
  constructor(private service: AdminService) {}

  async getData(): Promise<Result<AdminDto>> {
    try {
      const result = await this.service.get();
      const userData: AdminDto = {
        imageUrl: result.imageUrl
          ? `${ApiSource.url}/admin/stream/${result.imageUrl}`
          : undefined,
        name: result.name,
        lastName: result.lastName,
      };
      return success(userData);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
