import {
  type SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { useAdminDashboardContext } from '../bloc/useAdminContext';

import { columns } from '../components/doc-file-column';

import { useIntersectionObserver } from './useIntersectionObserver';

export const useDocTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});

  const { docList, fetchDocList, hasReachedMax } = useAdminDashboardContext();

  const observerRef = useIntersectionObserver(fetchDocList, {
    threshold: 0.1,
    rootMargin: '100px',
    enabled: !hasReachedMax,
  });

  const table = useReactTable({
    data: docList,
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
