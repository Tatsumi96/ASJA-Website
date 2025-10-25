import type { Result } from '@/core/result';
import type { AdminDto } from './admin.dto';

export abstract class AdminRepository {
  abstract getData(): Promise<Result<AdminDto>>;
}
