import { Modal } from '@/components/ui/modal';
import { PostTable } from '../components/post-table';
import { useModalContext } from '../bloc/useModalContext';
import { useScrollLock } from '../hooks/useScrollLock';
import { PostInformation } from '../components/post-information';

export const Postlist = () => {
  const { isPostInformationVisible } = useModalContext();

  useScrollLock(isPostInformationVisible);
  return (
    <section className=" flex flex-col h-full dark:bg-zinc-900">
      <PostTable />
      {isPostInformationVisible && (
        <Modal>
          <PostInformation />
        </Modal>
      )}
    </section>
  );
};
