import type { DocEntity } from '@/features/doc/doc.entity';
import type { ColumnDef } from '@tanstack/react-table';
import { DownloadIcon, Files } from 'lucide-react';

export const columns: ColumnDef<DocEntity>[] = [
  {
    accessorKey: 'lessonTitle',
    header: () => {
      return (
        <p className="text-gray-500 pl-10 dark:text-white">Nom du fichier</p>
      );
    },
    cell: ({ row }) => (
      <div className=" flex gap-2 pl-2">
        <Files className=" text-green-600" />
        <p className="font-semibold dark:text-white">
          {row.getValue('lessonTitle')}
        </p>
      </div>
    ),
  },
  {
    accessorKey: 'author',
    header: () => {
      return (
        <p className="text-gray-500 hidden md:flex dark:text-white">
          Nom de l'auteur
        </p>
      );
    },
    cell: ({ row }) => (
      <p className="pr-15 py-2 text-gray-500 hidden md:flex dark:text-white">
        {row.getValue('author')}
      </p>
    ),
  },

  {
    accessorKey: 'fileUrl',
    header: () => {},
    enableHiding: false,
    cell: ({ row }) => (
      <div className=" flex gap-2 pr-5">
        <a
          className="font-semibold"
          href={row.getValue('fileUrl')}
          download="doc.pdf"
        >
          <DownloadIcon className=" text-green-600 hover:scale-120 transition-all duration-200" />
        </a>
      </div>
    ),
  },
];
