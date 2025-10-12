import { Card } from '@/components/ui/card';

import { useModalContext } from '../bloc/useModalContext';
import { MdCancel } from 'react-icons/md';
import { Avatar } from '@/components/ui/avatar';

import logo from '@/assets/Logo/asja-logo.png';

export const PostInformation = () => {
  const { closePostInformation, post } = useModalContext();

  return (
    <div className=" flex flex-col gap-5 w-1/3">
      <MdCancel
        onClick={() => {
          closePostInformation();
        }}
        className=" text-white relative right-10 top-5  text-4xl cursor-pointer   hover:scale-125 transition-all duration-300"
      />
      <Card className="transition-all duration-500 p-5">
        <section className=" flex items-center gap-3">
          <Avatar className=" size-11 ">
            <img src={logo} />
          </Avatar>
          <p className="font-semibold text-xl">{post?.title}</p>
        </section>
        {post?.imageUrl && <img src={post?.imageUrl} className="rounded-2xl" />}
        <p>{post?.description}</p>
        <p className="flex justify-end text-gray-500">
          Publie le , {post?.date}
        </p>
      </Card>
    </div>
  );
};
