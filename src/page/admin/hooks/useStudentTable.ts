import {
  type SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { useAdminDashboardContext } from '../bloc/useAdminContext';

import { columns } from '../components/student-column';

import { useIntersectionObserver } from './useIntersectionObserver';

export const useStudentTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');

  const [rowSelection, setRowSelection] = React.useState({});

  const { fetchMentionStudentData, studentList, hasReachedMaxPage } =
    useAdminDashboardContext();

  const observerRef = useIntersectionObserver(fetchMentionStudentData, {
    threshold: 0.1,
    rootMargin: '100px',
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
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      rowSelection,
      globalFilter,
    },
  });

  return { table, observerRef, columns, globalFilter, setGlobalFilter };
};
