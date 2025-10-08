import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";
import { useAdminDashboardContext } from "../bloc/useStudentSpaceContext";

export const DeleteButton = ({ id }: { id: string }) => {
  const { deleteStudent } = useAdminDashboardContext();

  const callDeleteStudent = async () => {
    await deleteStudent(id);
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
