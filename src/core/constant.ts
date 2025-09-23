export class ApiSource {
  static PORT: number = 3000;
  static url: string = `http://localhost:${this.PORT}`;
}

export const mentions: Record<string, string[]> = {
  INFORMATIQUE: ["GL", "TCO", "GI"],
  DROIT: ["PROCESSUEL", "AFFAIRES"],
  ECONOMIE: ["GESTION ET COMMERCE INTERNATIONAL", "ECONOMIE ET DEVELOPPEMENT"],
  AGRNONOMIE: ["AGROALIMENTAIRE", "PRODUCTION VEGETALE", "PRODUCTION ANIMAL"],
  SCIENCE_DE_LA_TERRE: ["HYDROGEOLOGIE", "GEOLOGIE MINIERE"],
  LANGUE_ET_CULTURE: [],
};

export const classes = ["L1", "L2", "L3", "M1", "M2"];

export type Role = "User" | "Admin";
