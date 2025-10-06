import { Button } from "@/components/ui/button";
import { StudentTable } from "../components/studentTable";
import { MdPerson, MdSearch } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { useScrollLock } from "../hooks/useScrollLock";
import { useModalContext } from "../bloc/useModalContext";
import { Modal } from "@/components/ui/modal";
import { CardInputUser } from "../components/cardInputUser";

export const Studentlist = () => {
  const { isAddStudentCardVisible, open } = useModalContext();
  useScrollLock(isAddStudentCardVisible);
  return (
    <section className=" flex flex-col h-full dark:bg-zinc-900">
      <div className="flex justify-between items-center w-full py-6 px-4">
        <section className="flex flex-col">
          <p className="font-bold text-2xl">Liste des étudiants</p>
          <p className=" text-gray-500 dark:text-zinc-300">
            Gérer vos étudiants de maniere rapide
          </p>
        </section>
        <div className="relative">
          <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <Input className="pl-10 pr-3 bg-gray-100" placeholder="Recherche" />
        </div>

        <Button
          onClick={open}
          className=" text-lg text-white bg-green-700 hover:bg-green-900 flex  cursor-pointer p-6"
        >
          <MdPerson /> <p>Ajouter</p>
        </Button>
      </div>
      <StudentTable />
      {isAddStudentCardVisible && (
        <Modal>
          <CardInputUser />
        </Modal>
      )}
    </section>
  );
};
