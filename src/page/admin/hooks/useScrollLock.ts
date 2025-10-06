import { useEffect } from "react";

export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isLocked]);
};
