import type { Result } from '@/core/result';
import type { EventDto } from './event.dto';

export abstract class StrapiRepository {
  abstract getEvent(): Promise<Result<EventDto[]>>;
  abstract getAnnonce(): Promise<Result<string>>;
}
