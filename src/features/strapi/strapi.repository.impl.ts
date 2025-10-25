import { failure, success, type Result } from '@/core/result';
import type { EventDto } from './event.dto';
import type { StrapiRepository } from './strapi.repository';
import type { StrapiService } from './strapi.service';

export class StrapiRepositoryImpl implements StrapiRepository {
  constructor(private service: StrapiService) {}

  async getEvent(): Promise<Result<EventDto[]>> {
    try {
      const result = await this.service.getEvent();
      return success(result);
    } catch (error) {
      console.error(error);
      return failure(new Error());
    }
  }
}
