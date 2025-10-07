import { useContext, createContext } from "react";
import type { useModal } from "../hooks/useModal";

export const ModalContext = createContext<ReturnType<typeof useModal> | null>(
  null
);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Modal context must be initialized");

  return context;
};
