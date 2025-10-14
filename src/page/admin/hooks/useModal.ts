import type { UserDto } from '@/features/mention/user.dto';
import type { PostDto } from '@/features/post/post.dto';
import { useState } from 'react';

export const useModal = () => {
  const [deleteId, setDeleteId] = useState<string>('');
  const [fileNameToDelete, setFileNameToDelete] = useState<string>('');

  const [deleteCallBack, setDeleteCallBack] = useState<() => Promise<void>>(
    async () => {}
  );

  const [cancelCallBack, setcancelCallBack] = useState<() => void>(
    async () => {}
  );

  const [postDeleteId, setPostDeleteId] = useState<string>('');
  const [postFileNameToDelete, setPostFileNameToDelete] = useState<string>('');

  const [student, setStudent] = useState<UserDto>();

  const [post, setPost] = useState<PostDto>();

  const [isAddStudentCardVisible, setIsAddStudentCardVisible] =
    useState<boolean>(false);

  const [isAddPost, setAddPostVisible] = useState<boolean>(false);

  const [isAddDocVisible, setAddDocVisible] = useState<boolean>(false);

  const [isPostInformationVisible, setPostInformationVisible] =
    useState<boolean>(false);

  const [isDeleteConfirmationVisible, setIsDeleteConfirmationVisible] =
    useState<boolean>(false);

  const [isStudentInfoVisible, setIsStudentInfoVisible] =
    useState<boolean>(false);

  const openAddPost = () => {
    setAddPostVisible(true);
  };

  const closeAddPost = () => {
    setAddPostVisible(false);
  };

  const openAddDoc = () => {
    setAddDocVisible(true);
  };

  const closeAddDoc = () => {
    setAddDocVisible(false);
  };

  const openPostInformation = () => {
    setPostInformationVisible(true);
  };

  const closePostInformation = () => {
    setPostInformationVisible(false);
  };

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
    post,
    setPost,
    openPostInformation,
    closePostInformation,
    isPostInformationVisible,
    isAddPost,
    openAddPost,
    closeAddPost,
    fileNameToDelete,
    setFileNameToDelete,
    postDeleteId,
    setPostDeleteId,
    postFileNameToDelete,
    setPostFileNameToDelete,
    deleteCallBack,
    setDeleteCallBack,
    cancelCallBack,
    setcancelCallBack,
    isAddDocVisible,
    openAddDoc,
    closeAddDoc,
  };
};
