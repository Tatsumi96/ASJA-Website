import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const PostListSkeleton = () => {
  return (
    <Card className="w-full h-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-4">
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Skeleton className="size-11 rounded-full" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="aspect-video w-full rounded-2xl" />
          </div>
        ))}
      </div>
    </Card>
  );
};
