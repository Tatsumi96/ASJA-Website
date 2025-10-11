import type { Branche, Level, Mention } from '@/core/types';

export interface PostEntity {
  description: string;
  branche: Branche;
  level: Level;
  mention: Mention;
}

export interface GetPostInputType {
  page: number;
  limit: number;
}
