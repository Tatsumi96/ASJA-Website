import { Modal } from '@/components/ui/modal';
import { PostTable } from '../components/post-table';
import { useModalContext } from '../bloc/useModalContext';
import { useScrollLock } from '../hooks/useScrollLock';
import { PostInformation } from '../components/post-information';
import { CardAddPost } from '../components/card-add-post';
import { DeleteModalConfirmation } from '../components/delete-modal-confirmantion';

export const Postlist = () => {
  const {
    isPostInformationVisible,
    isAddPost,
    isDeleteConfirmationVisible,
    cancelCallBack,
    deleteCallBack,
  } = useModalContext();

  useScrollLock(
    isPostInformationVisible || isAddPost || isDeleteConfirmationVisible
  );
  return (
    <section className=" flex flex-col h-full dark:bg-zinc-900">
      <PostTable />
      {isPostInformationVisible && (
        <Modal>
          <PostInformation />
        </Modal>
      )}
      {isAddPost && (
        <Modal>
          <CardAddPost />
        </Modal>
      )}

      {isDeleteConfirmationVisible && (
        <Modal>
          <DeleteModalConfirmation
            text=" Voulez-vous vraiment supprimer cette annonce?"
            cancel={cancelCallBack}
            confirm={deleteCallBack}
          />
        </Modal>
      )}
    </section>
  );
};
