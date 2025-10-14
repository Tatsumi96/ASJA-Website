import type { Branche, Level, Mention } from '@/core/types';

export interface DocDto {
  fileName: string;
  lessonTitle: string;
  mention: Mention;
  level: Level;
  branche: Branche;
  id: string;
}
