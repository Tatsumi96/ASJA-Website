import { ApiSource } from '@/core/constant';
import type { AxiosInstance } from 'axios';
import type { EventDto } from './event.dto';

export abstract class StrapiService {
  abstract getEvent(): Promise<EventDto[]>;
}

export class StrapiServiceImpl implements StrapiService {
  constructor(private axios: AxiosInstance) {}

  async getEvent(): Promise<EventDto[]> {
    const response = await this.axios.get(
      `${ApiSource.strapiUrl}/api/section-evenements`
    );

    if (response.status != 200) throw new Error();
    return response.data.data;
  }
}
