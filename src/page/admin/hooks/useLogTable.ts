import { useAdminDashboardContext } from '../bloc/useStudentSpaceContext';
import * as React from 'react';
import {
  type SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { columns } from '../components/log-column';

import { useIntersectionObserver } from './useIntersectionObserver';

export const useLogTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');

  const [rowSelection, setRowSelection] = React.useState({});

  const { fetchLogs, log, hasReachedMaxLogPage } = useAdminDashboardContext();

  const observerRef = useIntersectionObserver(fetchLogs, {
    threshold: 0.1,
    rootMargin: '100px',
    enabled: !hasReachedMaxLogPage,
  });

  const table = useReactTable({
    data: log,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      rowSelection,
      globalFilter,
    },
  });

  return { table, observerRef, columns };
};
