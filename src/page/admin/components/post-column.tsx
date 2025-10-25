import { Separator } from '@/components/ui/separator';
import type { ColumnDef } from '@tanstack/react-table';

import type { PostDto } from '@/features/post/post.dto';
import { DeletePostButton } from './delete-post-button';

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
      <p className=" hidden py-2 dark:text-white md:flex font-bold">
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
    cell: ({ row }) => {
      const description: string = row.getValue('description');
      const limitWord = 100;
      return (
        <p className=" hidden py-2 dark:text-white md:flex">
          {description.length > 30
            ? description.slice(0, limitWord) + ' ...'
            : description}
        </p>
      );
    },
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
          {post.level == 'L3' || post.level == 'M1' || post.level == 'M2'
            ? post.mention + ' ' + post.level + ' ' + post.branche
            : post.mention + ' ' + post.level}
        </p>
      );
    },
  },
  {
    accessorKey: 'id',
    header: () => {},
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DeletePostButton
          id={row.getValue('id')}
          fileName={row.original.fileName as string}
        />
      );
    },
  },
];
