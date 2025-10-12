import type { Branche, Level, Mention } from '@/core/types';

export interface PostEntity {
  title: string;
  imageUrl?: string;
  description: string;
  branche: Branche;
  level: Level;
  mention: Mention;
}

export interface GetPostInputType {
  page: number;
  limit: number;
}
