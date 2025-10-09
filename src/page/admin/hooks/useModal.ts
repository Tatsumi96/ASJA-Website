import type { UserDto } from "@/features/mention/user.dto";
import { useState } from "react";

export const useModal = () => {
  const [deleteId, setDeleteId] = useState<string>("");
  const [student, setStudent] = useState<UserDto>();

  const [isAddStudentCardVisible, setIsAddStudentCardVisible] =
    useState<boolean>(false);

  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState<boolean>(false);

  const [isStudentInfoVisible, setIsStudentInfoVisible] =
    useState<boolean>(false);

  const openAddUser = () => {
    setIsAddStudentCardVisible(true);
  };

  const openStudentInfo = () => {
    setIsStudentInfoVisible(true);
  };

  const openDeleteConfirmation = () => {
    setIsDeleteConfirmationVisible(true);
  };

  const closeDeleteConfirmation = () => {
    setIsDeleteConfirmationVisible(false);
  };

  const closeStudentInfo = () => {
    setIsStudentInfoVisible(false);
  };
  const closeAddUser = () => {
    setIsAddStudentCardVisible(false);
  };

  return {
    isAddStudentCardVisible,
    openAddUser,
    closeAddUser,
    closeStudentInfo,
    openStudentInfo,
    isStudentInfoVisible,
    student,
    setStudent,
    isDeleteConfirmationVisible,
    openDeleteConfirmation,
    closeDeleteConfirmation,
    deleteId,
    setDeleteId,
  };
};
