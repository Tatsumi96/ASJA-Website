import { useModal } from "../hooks/useModal";
import { ModalContext } from "./useModalContext";

export const Modalprovider = ({ children }: { children: React.ReactNode }) => {
  const context = useModal();

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
};
