import { Button } from '@/components/ui/button';
import { MdDelete } from 'react-icons/md';
import { useModalContext } from '../bloc/useModalContext';

export const DeleteButton = ({
  id,
  fileName,
}: {
  id: string;
  fileName: string;
}) => {
  const { openDeleteConfirmation, setDeleteId, setFileNameToDelete } =
    useModalContext();

  const callDeleteStudent = async () => {
    setDeleteId(id);
    setFileNameToDelete(fileName);
    openDeleteConfirmation();
  };

  return (
    <Button
      onClick={callDeleteStudent}
      size="icon"
      variant="outline"
      className="rounded-full size-8 cursor-pointer border-transparent text-red-600 hover:bg-red-600 hover:text-white"
    >
      <div className=" px-1 py-0.5">
        <MdDelete />
      </div>
    </Button>
  );
};
