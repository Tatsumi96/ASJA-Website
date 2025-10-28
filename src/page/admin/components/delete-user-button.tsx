import { useAdminDashboardContext } from '../bloc/useAdminContext';
import { useModalContext } from '../bloc/useModalContext';
import { DeleteButton } from './delete-button';

export const DeleteUserButton = ({
  id,
  fileName,
}: {
  id: string;
  fileName: string;
}) => {
  const { deleteStudent } = useAdminDashboardContext();

  const {
    openDeleteConfirmation,
    setCancelCallBack,
    closeDeleteConfirmation,
    setDeleteCallBack,
  } = useModalContext();

  const callDelete = async () => {
    await deleteStudent(id, fileName);
    closeDeleteConfirmation();
  };

  const callDeleteStudent = async () => {
    setDeleteCallBack(() => callDelete);
    setCancelCallBack(() => closeDeleteConfirmation);
    openDeleteConfirmation();
  };

  return <DeleteButton callBack={callDeleteStudent} />;
};
