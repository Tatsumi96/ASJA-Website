import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { UserDto } from "@/features/mention/user.dto";
import type { ColumnDef } from "@tanstack/react-table";
import { TrancheBadge } from "./TrancheBadge";

export const columns: ColumnDef<UserDto>[] = [
  {
    accessorKey: "imageUrl",
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Photo</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <Avatar className=" size-11 ">
        <AvatarFallback className="dark:text-white  dark:bg-zinc-600">
          <img src={row.getValue("imageUrl")} />
        </AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "identifier",
    header: () => {
      return (
        <div className="hidden w-full items-center justify-between md:flex">
          <p className="font-semibold dark:text-white">Matricule</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" hidden py-2 dark:text-white md:flex">
        {row.getValue("identifier")}
      </p>
    ),
  },
  {
    accessorKey: "contact",
    header: () => {
      return (
        <div className="hidden w-full items-center justify-between md:flex">
          <p className="font-semibold dark:text-white">Contact</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" hidden py-2 dark:text-white md:flex">
        {row.getValue("contact")}
      </p>
    ),
  },
  {
    accessorKey: "name",
    enableSorting: true,
    header: () => {
      return (
        <div className="flex w-full items-center justify-between cursor-pointer">
          <p className="font-semibold dark:text-white">Nom</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white font-semibold">
        {row.getValue("name")}
      </p>
    ),
  },
  {
    accessorKey: "lastName",
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Prenom</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white">{row.getValue("lastName")}</p>
    ),
  },
  {
    accessorKey: "mention",
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Mention</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className="py-2 dark:text-white">{row.getValue("mention")}</p>
    ),
  },
  {
    accessorKey: "level",
    enableSorting: true,
    header: () => {
      return (
        <div className="flex w-full items-center justify-between cursor-pointer">
          <p className="font-semibold dark:text-white">Niveau</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white">{row.getValue("level")}</p>
    ),
  },
  {
    accessorKey: "branche",
    header: () => {
      return (
        <div className="flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">Branche</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <p className=" py-2 dark:text-white">{row.getValue("branche")}</p>
    ),
  },
  {
    accessorKey: "Premier",
    header: () => {
      return (
        <div className=" flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">1er Tranche</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <TrancheBadge
        studentData={row.original}
        tranche={"Premier"}
        trancheId={row.original.trancheId}
      />
    ),
  },

  {
    accessorKey: "Deuxieme",
    header: () => {
      return (
        <div className=" flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">2ème Tranche</p>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-10"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <TrancheBadge
        studentData={row.original}
        tranche={"Deuxieme"}
        trancheId={row.original.trancheId}
      />
    ),
  },
  {
    accessorKey: "Troisieme",
    header: () => {
      return (
        <div className=" flex w-full items-center justify-between">
          <p className="font-semibold dark:text-white">3ème Tranche</p>
        </div>
      );
    },
    cell: ({ row }) => (
      <TrancheBadge
        studentData={row.original}
        tranche={"Troisieme"}
        trancheId={row.original.trancheId}
      />
    ),
  },
];
