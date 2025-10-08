import { useAdminDashboardContext } from "../bloc/useStudentSpaceContext";
import * as React from "react";
import {
  type ColumnFiltersState,
  type SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { columns } from "../components/StudentColumn";

import { useIntersectionObserver } from "./useIntersectionObserver";

export const useStudentTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [rowSelection, setRowSelection] = React.useState({});

  const { fetchMentionStudentData, studentList, hasReachedMaxPage } =
    useAdminDashboardContext();

  const observerRef = useIntersectionObserver(fetchMentionStudentData, {
    threshold: 0.1,
    rootMargin: "100px",
    enabled: !hasReachedMaxPage,
  });

  const table = useReactTable({
    data: studentList,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  });

  return { table, observerRef, columns };
};
