import type { Branche, Level, Mention } from '@/core/types';

export interface PostDto {
  id: string;
  description: string;
  title: string;
  imageUrl: string | undefined;
  date: string;
  branche: Branche;
  level: Level;
  mention: Mention;
  fileName: string | undefined;
}
