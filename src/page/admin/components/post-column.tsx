import { Separator } from '@/components/ui/separator';
import type { ColumnDef } from '@tanstack/react-table';

import type { PostDto } from '@/features/post/post.dto';

export const columns: ColumnDef<PostDto>[] = [
  {
    accessorKey: 'title',
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Titre</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" hidden py-2 dark:text-white md:flex">
        {row.getValue('title')}
      </p>
    ),
  },
  {
    accessorKey: 'description',
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Description</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" hidden py-2 dark:text-white md:flex">
        {row.getValue('description')}
      </p>
    ),
  },
  {
    accessorKey: 'nothing',
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Addressé</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => {
      const post: PostDto = row.original;
      return (
        <p className=" hidden py-2 dark:text-white md:flex">
          {post.branche + post.mention + post.level}
        </p>
      );
    },
  },
];
