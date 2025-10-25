import { useModalContext } from '../bloc/useModalContext';
import { useAdminDashboardContext } from '../bloc/useStudentSpaceContext';
import { DeleteButton } from './delete-button';

export const DeletePostButton = ({
  id,
  fileName,
}: {
  id: string;
  fileName: string;
}) => {
  const {
    openDeleteConfirmation,
    closeDeleteConfirmation,
    setDeleteCallBack,
    setCancelCallBack,
  } = useModalContext();
  const { deletePost } = useAdminDashboardContext();

  const callDeletePost = async () => {
    await deletePost(id, fileName);
    closeDeleteConfirmation();
  };

  const callDelete = async () => {
    setDeleteCallBack(() => callDeletePost);
    setCancelCallBack(() => closeDeleteConfirmation);
    openDeleteConfirmation();
  };

  return <DeleteButton callBack={callDelete} />;
};
