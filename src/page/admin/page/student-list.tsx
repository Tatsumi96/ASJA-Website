import { StudentTable } from '../components/student-table';
import { useScrollLock } from '../hooks/useScrollLock';
import { useModalContext } from '../bloc/useModalContext';
import { Modal } from '@/components/ui/modal';
import { CardInputUser } from '../components/card-user-input';
import { StudentInformation } from '../components/student-information';
import type { UserDto } from '@/features/mention/user.dto';
import { DeleteModalConfirmation } from '../components/delete-modal-confirmantion';
import { CardUpdateUser } from '../components/card-user-update';

export const Studentlist = () => {
  const {
    isAddStudentCardVisible,
    isStudentInfoVisible,
    student,
    isDeleteConfirmationVisible,
    isUpdateUserVisible,
    deleteCallBack,
    cancelCallBack,
  } = useModalContext();

  useScrollLock(
    isAddStudentCardVisible ||
      isStudentInfoVisible ||
      isDeleteConfirmationVisible ||
      isUpdateUserVisible
  );
  return (
    <section className=" flex flex-col h-full dark:bg-zinc-900">
      <StudentTable />
      {isAddStudentCardVisible && (
        <Modal>
          <CardInputUser />
        </Modal>
      )}
      {isUpdateUserVisible && (
        <Modal>
          <CardUpdateUser />
        </Modal>
      )}
      {isStudentInfoVisible && (
        <Modal>
          <StudentInformation student={student as UserDto} />
        </Modal>
      )}

      {isDeleteConfirmationVisible && (
        <Modal>
          <DeleteModalConfirmation
            text=" Voulez-vous vraiment supprimer cette etudiant?"
            cancel={cancelCallBack}
            confirm={deleteCallBack}
          />
        </Modal>
      )}
    </section>
  );
};
