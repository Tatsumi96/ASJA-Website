import type { Branche, Level, Mention, Role } from "@/core/types";

export interface UserEntity {
  name: string;
  lastName: string;
  password: string;
  contact: string;
  role: Role;
  mention?: Mention;
  level?: Level;
  branche: Branche;
  grade?: string;
  Premier: boolean;
  Deuxieme: boolean;
  Troisieme: boolean;
  fileName: string;
}
