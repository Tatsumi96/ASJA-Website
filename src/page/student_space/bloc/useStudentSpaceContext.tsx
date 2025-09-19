import { createContext, useContext } from "react";
import { useDocBloc } from "./useDocBloc";

export const StudentPortalContext = createContext<ReturnType<
  typeof useDocBloc
> | null>(null);

export const useStudentPortalContext = () => {
  const context = useContext(StudentPortalContext);
  if (!context) throw new Error("useStudentPortalContext must be initialized");
  return context;
};
