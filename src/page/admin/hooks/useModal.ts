import { useState } from "react";

export const useModal = () => {
  const [isAddStudentCardVisible, setIsAddStudentCardVisible] =
    useState<boolean>(false);

  const open = () => {
    setIsAddStudentCardVisible(true);
  };

  const close = () => {
    setIsAddStudentCardVisible(false);
  };

  return {
    isAddStudentCardVisible,
    open,
    close,
  };
};
