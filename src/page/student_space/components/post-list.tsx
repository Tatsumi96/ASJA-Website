import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import { Avatar } from '@/components/ui/avatar';

import logo from '@/assets/Logo/asja-logo.png';
import { Separator } from '@/components/ui/separator';

export const PostList = () => {
  const { post } = useStudentPortalContext();
  return (
    <section>
      {post.map((item) => (
        <section className="flex flex-col p-4 gap-3">
          <section className=" flex items-center gap-3">
            <Avatar className=" size-11 ">
              <img src={logo} />
            </Avatar>
            <p className="font-semibold text-xl">{item.title}</p>
          </section>
          {item.imageUrl && <img src={item.imageUrl} className="rounded-2xl" />}
          <p>{item.description}</p>
          <p className="flex justify-end text-gray-500">
            Publie le , {item.date}
          </p>
          <Separator className="data-[orientation=vertical]:h-10" />
        </section>
      ))}
    </section>
  );
};
