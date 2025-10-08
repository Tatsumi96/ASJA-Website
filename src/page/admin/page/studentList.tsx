import { StudentTable } from "../components/studentTable";
import { useScrollLock } from "../hooks/useScrollLock";
import { useModalContext } from "../bloc/useModalContext";
import { Modal } from "@/components/ui/modal";
import { CardInputUser } from "../components/cardInputUser";

export const Studentlist = () => {
  const { isAddStudentCardVisible } = useModalContext();
  useScrollLock(isAddStudentCardVisible);
  return (
    <section className=" flex flex-col h-full dark:bg-zinc-900">
      <StudentTable />
      {isAddStudentCardVisible && (
        <Modal>
          <CardInputUser />
        </Modal>
      )}
    </section>
  );
};
