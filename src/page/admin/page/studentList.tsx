import { StudentTable } from "../components/studentTable";
import { useScrollLock } from "../hooks/useScrollLock";
import { useModalContext } from "../bloc/useModalContext";
import { Modal } from "@/components/ui/modal";
import { CardInputUser } from "../components/cardInputUser";
import { StudentInformation } from "../components/student-information";
import type { UserDto } from "@/features/mention/user.dto";

export const Studentlist = () => {
  const { isAddStudentCardVisible, isStudentInfoVisible, student } =
    useModalContext();
  useScrollLock(isAddStudentCardVisible || isStudentInfoVisible);
  return (
    <section className=" flex flex-col h-full dark:bg-zinc-900">
      <StudentTable />
      {isAddStudentCardVisible && (
        <Modal>
          <CardInputUser />
        </Modal>
      )}
      {isStudentInfoVisible && (
        <Modal>
          <StudentInformation student={student as UserDto} />
        </Modal>
      )}
    </section>
  );
};
