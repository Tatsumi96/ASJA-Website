import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const DocListSkeleton = () => {
  return (
    <Card className="w-full h-full bg-white/10 dark:bg-black/20 backdrop-blur-lg rounded-2xl p-4 border-0">
      <div className="p-4 space-y-4">
        <Skeleton className="h-8 w-1/2 mb-6" />
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
              <Skeleton className="size-8 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
