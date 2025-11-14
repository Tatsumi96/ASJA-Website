import logo from '@/assets/Logo/asja-logo.png';
import { Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { AnimatePresence, motion , easeInOut } from 'framer-motion';
import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import { PostListSkeleton } from './post-list-skeleton';

const postVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: easeInOut,
    },
  }),
};

export const PostList = () => {
  const { post, isLoading } = useStudentPortalContext();

  if (isLoading) {
    return <PostListSkeleton />;
  }

  return (
    <Card className="w-full h-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-1 md:p-4 border-0">
      <ScrollArea className="h-250">
        <div className="p-4 space-y-6">
          <AnimatePresence>
            {post.map((item, i) => (
              <motion.section
                key={item.id}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={postVariants}
                className="flex flex-col gap-4 text-white"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="size-12 border-2 border-green-500">
                    <img src={logo} alt="ASJA Logo" />
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg drop-shadow-md text-black dark:text-gray-200">
                      {item.title}
                    </p>
                    <p className="text-xs  text-black dark:text-gray-200">
                      Publié le {item.date}
                    </p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-black dark:text-gray-200">
                  {item.description}
                </p>
                {item.imageUrl && (
                  <div className="aspect-video overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {i < post.length - 1 && (
                  <Separator className="bg-white/20 mt-4" />
                )}
              </motion.section>
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </Card>
  );
};
