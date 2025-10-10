import type { Action } from "@reduxjs/toolkit";

export interface LogEntity {
  date: string;
  description: string;
  action: Action;
}
