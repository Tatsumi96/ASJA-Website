import { ApiSource } from '@/core/constant';
import type { AxiosInstance } from 'axios';
import type { EventDto } from './event.dto';

export abstract class StrapiService {
  abstract getEvent(): Promise<EventDto[]>;
}

export class StrapiServiceImpl implements StrapiService {
  constructor(private axios: AxiosInstance) {}

  async getEvent(): Promise<EventDto[]> {
    const result = await this.axios.get(ApiSource.strapiUrl);
    return result.data;
  }
}

import dehonsDayImage from '@/assets/Image-evenement/Dehons_day/event-dehons_day3.jpg';
import suisseImage from '@/assets/Image-evenement/event-donation_1.jpg';
import gennrossoImage from '@/assets/Image-evenement/event-genrosso.jpg';

export class FakeStrapiService implements StrapiService {
  private fakeData: EventDto[] = [
    {
      title: 'Dehons DAY',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: dehonsDayImage,
      altText: 'Interior Painting',
    },
    {
      title: 'Gennrosso',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: gennrossoImage,
      altText: 'Exterior Painting',
    },
    {
      title: '25em anniversaire',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: suisseImage,
      altText: 'Cabinet Painting',
    },
  ];

  getEvent(): Promise<EventDto[]> {
    return Promise.resolve([...this.fakeData]);
  }
}
