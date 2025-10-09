import type { Role } from "@/core/constant";

export interface LoginDto {
  identifier: number;
  password: string;
  role: Role;
}
