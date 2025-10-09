import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { useModalContext } from "../bloc/useModalContext";

export const DeleteButton = ({ id }: { id: string }) => {
  const { openDeleteConfirmation, setDeleteId } = useModalContext();

  const callDeleteStudent = async () => {
    setDeleteId(id);
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
