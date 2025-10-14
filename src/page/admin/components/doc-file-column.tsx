import { Separator } from '@/components/ui/separator';
import type { ColumnDef } from '@tanstack/react-table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { classes, mentions } from '@/core/types';
import type { DocDto } from '@/features/doc/doc.dto';
import { DeleteDocButton } from './delete-doc-button';

export const columns: ColumnDef<DocDto>[] = [
  {
    accessorKey: 'lessonTitle',
    header: () => {
      return (
        <div className="hidden w-full items-center justify-between md:flex">
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
        {row.getValue('lessonTitle')}
      </p>
    ),
  },
  {
    accessorKey: 'mention',
    enableColumnFilter: true,
    header: ({ column }) => {
      return (
        <div className="flex w-full items-center gap-5 justify-between m-1">
          <Select
            value={
              (column.getFilterValue() as string)?.replace(/ /g, '_') ?? ''
            }
            onValueChange={(value) =>
              column.setFilterValue(
                value === 'Tout' ? undefined : value.replace(/_/g, ' ')
              )
            }
          >
            <SelectTrigger className="w-full bg-gray-200 ">
              <SelectValue placeholder="Mention" />
            </SelectTrigger>
            <SelectContent className="z-[900]">
              <SelectItem value="Tout">Tout</SelectItem>
              {Object.keys(mentions).map((mainBranche) => (
                <SelectItem key={mainBranche} value={mainBranche}>
                  {mainBranche.replace(/_/g, '   ')}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className="py-2 dark:text-white">{row.getValue('mention')}</p>
    ),
  },
  {
    accessorKey: 'level',
    enableSorting: true,
    header: ({ column }) => {
      return (
        <div className="flex w-full items-center justify-between gap-5 cursor-pointer">
          <Select
            value={column.getFilterValue() as string}
            onValueChange={(value) =>
              column.setFilterValue(value === 'Tout' ? undefined : value)
            }
          >
            <SelectTrigger className="w-full bg-gray-200">
              <SelectValue placeholder="Niveau" />
            </SelectTrigger>
            <SelectContent className="z-[900]">
              <SelectItem value="Tout">Tout</SelectItem>
              {classes.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white">{row.getValue('level')}</p>
    ),
  },
  {
    accessorKey: 'branche',
    header: ({ column, table }) => {
      const mention = table.getColumn('mention')?.getFilterValue() as
        | string
        | undefined;
      return (
        <div className="flex w-full items-center justify-between gap-5">
          <Select
            disabled={!mention}
            value={(column.getFilterValue() as string as string) ?? ''}
            onValueChange={(value) =>
              column.setFilterValue(
                value === 'Tout' ? undefined : value.replace(/_/g, ' ')
              )
            }
          >
            <SelectTrigger className="w-full bg-gray-200">
              <SelectValue placeholder="Branche" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Tout">Tout</SelectItem>
              {mention &&
                mentions[mention.replace(/ /g, '_')].map((branche) => (
                  <SelectItem key={branche} value={branche}>
                    {branche}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white">{row.getValue('branche')}</p>
    ),
  },
  {
    accessorKey: 'id',
    header: () => {},
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DeleteDocButton
          id={row.getValue('id')}
          fileName={row.original.fileName as string}
        />
      );
    },
  },
];
