import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MdWarning } from "react-icons/md";
import { useModalContext } from "../bloc/useModalContext";
import { useAdminDashboardContext } from "../bloc/useStudentSpaceContext";

export const DeleteModalConfirmation = () => {
  const { closeDeleteConfirmation, deleteId, setDeleteId } = useModalContext();
  const { deleteStudent } = useAdminDashboardContext();

  const callDelete = async () => {
    await deleteStudent(deleteId);
    closeDeleteConfirmation();
  };

  const cancel = () => {
    setDeleteId("");
    closeDeleteConfirmation();
  };

  return (
    <div className=" flex flex-col gap-5 w-1/3">
      <Card className="transition-all duration-500 p-5 items-center">
        <MdWarning className=" text-7xl dark:text-white text-red-600" />
        <p className="font-semibold">
          Voulez-vous vraiment supprimer l'etudiant de la liste ?
        </p>
        <section className="flex justify-end gap-3">
          <Button onClick={cancel} className="cursor-pointer bg-gray-400 dark:bg-gray-300 dark:hover:bg-gray-200">
            Annuler
          </Button>
          <Button
            onClick={callDelete}
            className="bg-red-600 cursor-pointer hover:bg-red-700 text-white"
          >
            Supprimer
          </Button>
        </section>
      </Card>
    </div>
  );
};
