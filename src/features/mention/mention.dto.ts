import type { Level } from "@/core/types";

export interface MentionDto {
  DROIT: {
    totalStudent: number;
    data: {
      level: Level;
      studentNumber: number;
      AFFAIRES?: {
        studentNumber: number;
      }[];
      PROCESSUEL?: {
        studentNumber: number;
      }[];
    }[];
  };
  INFORMATIQUE: {
    totalStudent: number;
    data: {
      level: Level;
      studentNumber: number;
      TCO?: {
        studentNumber: number;
      }[];
      GL?: {
        studentNumber: number;
      }[];
      GI?: {
        studentNumber: number;
      }[];
    }[];
  };
  SCIENCE_DE_LA_TERRE: {
    totalStudent: number;
    data: {
      level: Level;
      studentNumber: number;
      HYDROGEOLOGIE?: {
        studentNumber: number;
      }[];
      GEOLOGIE_MINIERE?: {
        studentNumber: number;
      }[];
    }[];
  };
  ECONOMIE: {
    totalStudent: number;
    data: {
      level: Level;
      studentNumber: number;
      ECONOMIE_ET_DEVELOPPEMENT?: {
        studentNumber: number;
      }[];
      GESTION_ET_COMMERCE_INTERNATIONAL?: {
        studentNumber: number;
      }[];
    }[];
  };
  AGRONOMIE: {
    totalStudent: number;
    data: {
      level: Level;
      studentNumber: number;
      AGROALIMENTAIRE?: {
        studentNumber: number;
      }[];
      PRODUCTION_VEGETALE?: {
        studentNumber: number;
      }[];
      PRODUCTION_ANIMAL?: {
        studentNumber: number;
      }[];
    }[];
  };
  LANGUE_ET_CULTURE: {
    totalStudent: number;
    data: {
      level: Level;
      studentNumber: number;
    }[];
  };
}
