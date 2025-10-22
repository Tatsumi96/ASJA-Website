import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import { Avatar } from '@/components/ui/avatar';

import logo from '@/assets/Logo/asja-logo.png';
import { Separator } from '@/components/ui/separator';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export const PostList = () => {
  const { post } = useStudentPortalContext();
  return (
    <Card className="lg:px-4 transition-all  duration-500 border-0 shadow-none">
      <ScrollArea className="h-full">
        {post.map((item) => (
          <section className="flex flex-col p-4 gap-3">
            <section className=" flex items-center gap-3">
              <Avatar className=" size-11 ">
                <img src={logo} />
              </Avatar>
              <p className="font-semibold lg:text-xl text-black dark:text-white">
                {item.title}
              </p>
            </section>
            <p className=" text-black dark:text-white md:text-lg">
              {item.description}
            </p>
            {item.imageUrl && (
              <div className="aspect-[16/9]">
                {' '}
                <img
                  src={item.imageUrl}
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            )}
            <p className="flex justify-end text-gray-500">
              Publie le , {item.date}
            </p>

            <Separator className="data-[orientation=vertical]:h-10" />
          </section>
        ))}
      </ScrollArea>
    </Card>
  );
};
