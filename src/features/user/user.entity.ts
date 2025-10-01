import type { Branche, Level, Mention, Role } from "@/core/types";

export interface UserEntity {
  matricule: number;
  name: string;
  afterName: string;
  password: string;
  contact: string;
  role: Role;
  mention?: Mention;
  level?: Level;
  branche: Branche;
  grade?: string;
}
