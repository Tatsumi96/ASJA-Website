import type { DocEntity } from '@/features/doc/doc.entity';
import type { ColumnDef } from '@tanstack/react-table';
import { Files } from 'lucide-react';
import { DeleteDocButton } from './delete-doc-button';

export const columns: ColumnDef<DocEntity>[] = [
  {
    accessorKey: 'lessonTitle',
    header: () => {
      return <p className="text-gray-500 pl-10">Nom du fichier</p>;
    },
    cell: ({ row }) => (
      <div className=" flex gap-2 pl-2">
        <Files className=" text-green-600" />
        <p className="font-semibold">{row.getValue('lessonTitle')}</p>
      </div>
    ),
  },
  {
    accessorKey: 'author',
    header: () => {
      return <p className="text-gray-500">Nom de l'auteur</p>;
    },
    cell: ({ row }) => (
      <p className="pr-15 py-2 text-gray-500">{row.getValue('author')}</p>
    ),
  },
  {
    accessorKey: 'fileSize',
    header: () => {
      return <p className="text-gray-500">Taille du fichier</p>;
    },
    cell: ({ row }) => (
      <p className="pr-20 py-2 text-gray-500">{row.getValue('fileSize')} MB</p>
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
