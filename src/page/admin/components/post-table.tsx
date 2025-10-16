import { flexRender } from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ScrollArea } from '@/components/ui/scroll-area';
import { usePostTable } from '../hooks/usePostTable';
import { Button } from '@/components/ui/button';
import { MdNewspaper } from 'react-icons/md';
import { useModalContext } from '../bloc/useModalContext';

export const PostTable = () => {
  const { observerRef, table, columns } = usePostTable();
  const { openPostInformation, setPost, openAddPost } = useModalContext();

  return (
    <div className=" border transition-all duration-500 dark:bg-zinc-900 p-4  w-full">
      <div className="flex justify-between items-center w-full py-6 px-4">
        <section className="flex flex-col">
          <p className="font-bold text-2xl">Annonce</p>
          <p className=" text-gray-500 dark:text-zinc-300">
            Gardez vos etudiants informer
          </p>
        </section>
        <Button
          onClick={openAddPost}
          className=" text-lg text-white bg-green-700 hover:bg-green-900 flex  cursor-pointer p-6"
        >
          <MdNewspaper /> <p>Ajouter</p>
        </Button>
      </div>
      <ScrollArea className="h-[640px]">
        <Table className="w-full">
          <TableHeader className=" z-10 bg-transparent  dark:bg-zinc-900 transition-all duration-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="sticky top-0"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className=" cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      onClick={() => {
                        setPost(row.original);
                        openPostInformation();
                      }}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
            <TableRow>
              <TableCell colSpan={columns.length}>
                <span ref={observerRef}></span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};
