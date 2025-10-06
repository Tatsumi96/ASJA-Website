import type { Branche, Level, Mention } from "@/core/types";

export interface UserDto {
  imageUrl: string;
  identifier: number;
  name: string;
  lastName: string;
  contact: string;
  mention?: Mention;
  level?: Level;
  branche: Branche;
  trancheOne: boolean;
  trancheTwo: boolean;
  trancheThree: boolean;
}
