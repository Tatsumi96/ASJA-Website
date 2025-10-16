import { Modal } from '@/components/ui/modal';
import { DocDataTable } from '../components/doc-data-table';
import { useModalContext } from '../bloc/useModalContext';
import { useScrollLock } from '../hooks/useScrollLock';
import { DeleteModalConfirmation } from '../components/delete-modal-confirmantion';
import { CardAddDoc } from '../components/card-document-input';

export const Doclist = () => {
  const {
    isAddDocVisible,
    deleteCallBack,
    cancelCallBack,
    isDeleteConfirmationVisible,
  } = useModalContext();

  useScrollLock(isAddDocVisible || isDeleteConfirmationVisible);
  return (
    <section className=" flex flex-col h-full dark:bg-zinc-900">
      <DocDataTable />
      {isAddDocVisible && (
        <Modal>
          <CardAddDoc />
        </Modal>
      )}
      {isDeleteConfirmationVisible && (
        <Modal>
          <DeleteModalConfirmation
            text=" Voulez-vous vraiment supprimer ce document?"
            confirm={deleteCallBack}
            cancel={cancelCallBack}
          />
        </Modal>
      )}
    </section>
  );
};
