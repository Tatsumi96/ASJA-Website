import { Modal } from '@/components/ui/modal';
import { PostTable } from '../components/post-table';
import { useModalContext } from '../bloc/useModalContext';
import { useScrollLock } from '../hooks/useScrollLock';
import { PostInformation } from '../components/post-information';
import { CardAddPost } from '../components/card-add-post';

export const Postlist = () => {
  const { isPostInformationVisible, isAddPost } = useModalContext();

  useScrollLock(isPostInformationVisible || isAddPost);
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
    </section>
  );
};
