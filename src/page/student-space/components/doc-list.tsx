import { flexRender } from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

import { ScrollArea } from '@/components/ui/scroll-area';
import { useDocTable } from '../hooks/useDocFileTable';

export const DocDataTable = () => {
  const { observerRef, table, columns } = useDocTable();

  return (
    <div className=" border-0 transition-all lg:flex flex-col duration-500 w-full md:w-1/2  ">
      <p className="text-xl md:text-3xl font-semibold p-5 text-green-700 dark:text-white transition-all duration-500">
        Liste des documents
      </p>
      <ScrollArea className="h-170">
        <Table>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="hover:bg-transparent "
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
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
                  Aucun document pour l'instant
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
