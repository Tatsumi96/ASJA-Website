import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const StudentInfoSkeleton = () => {
  return (
    <div className="flex flex-col md:w-1/3 w-full">
      <Card className="transition-all duration-500 border-0 shadow-none h-full bg-transparent">
        <div className="p-4 space-y-4">
          <div className="flex flex-col items-center justify-center">
            <Skeleton className="rounded-full size-48" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="h-6 w-40" />
            <div className="flex gap-3 pt-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <Skeleton className="h-4 w-48 pt-2" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
      </Card>
    </div>
  );
};
