import type { Role } from "@/core/types";

export interface LoginDto {
  identifier: number;
  password: string;
  role: Role;
}
