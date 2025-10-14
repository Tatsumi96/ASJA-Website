import type { Branche, Level, Mention } from '@/core/types';

export interface DocEntity {
  fileName: string;
  lessonTitle: string;
  fileSize: number;
  level: Level;
  branche: Branche;
  mention: Mention;
}
