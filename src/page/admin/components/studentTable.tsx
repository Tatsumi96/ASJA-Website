import { flexRender } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useStudentTable } from "../hooks/useStudentTable";

export const StudentTable = () => {
  const { observerRef, table, columns } = useStudentTable();

  return (
    <div className=" border transition-all duration-500 rounded-2xl dark:bg-zinc-900 p-4 h-full w-full">
      <ScrollArea className="h-170">
        <Table>
          <TableHeader className="sticky top-0 z-10 bg-transparent dark:bg-zinc-900 transition-all duration-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
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
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-transparent"
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
