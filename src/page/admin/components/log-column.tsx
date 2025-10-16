import { Separator } from '@/components/ui/separator';
import type { ColumnDef } from '@tanstack/react-table';

import type { LogEntity } from '@/features/log/log.entity';

export const columns: ColumnDef<LogEntity>[] = [
  {
    accessorKey: 'action',
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Action</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" hidden py-2 dark:text-white md:flex">
        {row.getValue('action')}
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
    accessorKey: 'date',
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Date</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" hidden py-2 dark:text-white md:flex">
        {row.getValue('date')}
      </p>
    ),
  },
];
