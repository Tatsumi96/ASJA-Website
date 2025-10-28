import {
  type SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';
import { useAdminDashboardContext } from '../bloc/useAdminContext';

import { columns } from '../components/post-column';

import { useIntersectionObserver } from './useIntersectionObserver';

export const usePostTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');

  const [rowSelection, setRowSelection] = React.useState({});

  const { post, hasReachedMaxLogPage, fetchPostList } =
    useAdminDashboardContext();

  const observerRef = useIntersectionObserver(fetchPostList, {
    threshold: 0.1,
    rootMargin: '100px',
    enabled: !hasReachedMaxLogPage,
  });

  const table = useReactTable({
    data: post,
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
