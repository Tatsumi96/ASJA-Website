import { useModalContext } from '../bloc/useModalContext';
import { useAdminDashboardContext } from '../bloc/useStudentSpaceContext';
import { DeleteButton } from './delete-button';

export const DeleteDocButton = ({
  id,
  fileName,
}: {
  id: string;
  fileName: string;
}) => {
  const { deleteDoc } = useAdminDashboardContext();

  const {
    openDeleteConfirmation,
    setCancelCallBack,
    closeDeleteConfirmation,
    setDeleteCallBack,
  } = useModalContext();

  const callDelete = async () => {
    await deleteDoc(id, fileName);
    closeDeleteConfirmation();
  };

  const callDeleteStudent = async () => {
    setDeleteCallBack(() => callDelete);
    setCancelCallBack(() => closeDeleteConfirmation);
    openDeleteConfirmation();
  };

  return <DeleteButton callBack={callDeleteStudent} />;
};
