import type { DocEntity } from "@/features/doc/doc.entity";
import type { ColumnDef } from "@tanstack/react-table";
import { Files } from "lucide-react";

export const columns: ColumnDef<DocEntity>[] = [
  {
    accessorKey: "fileName",
    header: () => {
      return <p className="text-gray-500 pl-10">Nom du fichier</p>;
    },
    cell: ({ row }) => (
      <div className=" flex gap-2 pl-5">
        <Files className=" text-green-600" />
        <p className="font-semibold">{row.getValue("fileName")}</p>
      </div>
    ),
  },
  {
    accessorKey: "author",
    header: () => {
      return <p className="text-gray-500">Nom de l'auteur</p>;
    },
    cell: ({ row }) => (
      <p className="pr-10 py-2 text-gray-500">{row.getValue("author")}</p>
    ),
  },
  {
    accessorKey: "fileSize",
    header: () => {
      return <p className="text-gray-500">Taille du fichier</p>;
    },
    cell: ({ row }) => (
      <p className="pl-10 py-2 text-gray-500">{row.getValue("fileSize")} MB</p>
    ),
  },
];
