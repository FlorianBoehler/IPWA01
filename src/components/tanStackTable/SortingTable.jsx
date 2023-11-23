import React from "react";
import "./DataTable.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import mainData from "./data/co2_data.json";
import { columnDef } from "./data/columnDef";

const Table = () => {
  const finalData = React.useMemo(() => mainData, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const [sorting, setSorting] = React.useState([]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: { sorting: sorting },
    onSortingChange: setSorting,
  });

  return (
    <table>
      <thead>
        {tableInstance.getHeaderGroups().map((headerEl) => {
          return (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => {
                return (
                  <th key={columnEl.id} colSpan={columnEl.colSpan} onClick={columnEl.column.getToggleSortingHandler()}>
                    {flexRender(
                      columnEl.column.columnDef.header,
                      columnEl.getContext()
                    )}
                    {/*Code for UP and DOWN sorting*/}
                    {
                      { asc: " ↑", desc: " ↓" }[
                        columnEl.column.getIsSorted() ?? null
                      ]
                    }
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((rowEl) => {
          return (
            <tr key={rowEl.id}>
              {rowEl.getVisibleCells().map((cellEl) => {
                return (
                  <td key={cellEl.id}>
                    {flexRender(
                      cellEl.column.columnDef.cell,
                      cellEl.getContext()
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
