import { useAdminDashboardContext } from "../bloc/useStudentSpaceContext";
import * as React from "react";
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { columns } from "../components/StudentColumn";

import { useIntersectionObserver } from "./useIntersectionObserver";
import type { UserDto } from "@/features/mention/user.dto";

const fakeStudentList: UserDto[] = [
  {
    imagUrl: "",
    identifier: 123,
    name: "Derasdsdsdsdsdsdsd",
    lastName: "Le grandsdsdsdsdsdsdsd",
    contact: "1234",
    mention: "INFORMATIQUE",
    level: "L2",
    branche: "GL",
    trancheOne: true,
    trancheTwo: false,
    trancheThree: false,
  },
  {
    imagUrl: "",
    identifier: 123,
    name: "Deraasdbaiudbai",
    lastName: "Le grand",
    contact: "1234",
    mention: "INFORMATIQUE",
    level: "L2",
    branche: "GL",
    trancheOne: true,
    trancheTwo: false,
    trancheThree: false,
  },
  {
    imagUrl: "",
    identifier: 123,
    name: "Dera",
    lastName: "Le grand",
    contact: "1234",
    mention: "INFORMATIQUE",
    level: "L2",
    branche: "GL",
    trancheOne: true,
    trancheTwo: false,
    trancheThree: false,
  },
  {
    imagUrl: "",
    identifier: 123,
    name: "Dera",
    lastName: "Le grand",
    contact: "1234",
    mention: "INFORMATIQUE",
    level: "L2",
    branche: "GL",
    trancheOne: true,
    trancheTwo: false,
    trancheThree: false,
  },
  {
    imagUrl: "",
    identifier: 123,
    name: "Dera",
    lastName: "Le grand",
    contact: "1234",
    mention: "INFORMATIQUE",
    level: "L2",
    branche: "GL",
    trancheOne: true,
    trancheTwo: false,
    trancheThree: false,
  },
];

export const useStudentTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { fetchDocList, hasReachedMax } = useAdminDashboardContext();

  const observerRef = useIntersectionObserver(fetchDocList, {
    threshold: 0.1,
    rootMargin: "100px",
    enabled: !hasReachedMax,
  });

  const table = useReactTable({
    data: fakeStudentList,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return { table, observerRef, columns };
};
