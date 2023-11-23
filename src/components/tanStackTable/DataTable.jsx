import React from "react";
import "./DataTable.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import mainData from "./data/co2_data.json";
import { columnDef } from "./data/columnDef";

const Table = () => {
  const finalData = React.useMemo(() => mainData, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {tableInstance.getHeaderGroups().map((headerEl) => {
          return (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => {
                return (
                  <th key={columnEl.id} colSpan={columnEl.colSpan}>
                    {flexRender(
                      columnEl.column.columnDef.header,
                      columnEl.getContext()
                    )}
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
