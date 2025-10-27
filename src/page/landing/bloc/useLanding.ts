import type { EventDto } from '@/features/strapi/event.dto';
import { strapiRepo } from '@/injection';
import { useEffect, useState } from 'react';

export const useLanding = () => {
  const [event, setEvent] = useState<EventDto[]>([]);

  const fetchEvent = async () => {
    const result = await strapiRepo.getEvent();

    if (result.status == 'failure') return;

    setEvent(result.data);
  };

  useEffect(() => {
    const callFetchEvent = async () => {
      await fetchEvent();
    };

    callFetchEvent();
  }, []);

  return { event };
};
