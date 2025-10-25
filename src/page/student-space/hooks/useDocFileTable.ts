import { useStudentPortalContext } from '../bloc/useStudentSpaceContext';
import * as React from 'react';
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { columns } from '../components/doc-file-column';

import { useIntersectionObserver } from './useIntersectionObserver';

export const useDocTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { docList, fetchDocList, hasReachedMax } = useStudentPortalContext();

  const observerRef = useIntersectionObserver(fetchDocList, {
    threshold: 0.1,
    rootMargin: '100px',
    enabled: !hasReachedMax,
  });

  const table = useReactTable({
    data: docList,
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
