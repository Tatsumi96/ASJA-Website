import type { Branche, Level, Mention } from '@/core/types';

export interface UpdateDto {
  identifier: number;
  name: string;
  lastName: string;
  contact: string;
  mention: Mention;
  level: Level;
  branche: Branche;
  imageUrl: string | undefined;
}
