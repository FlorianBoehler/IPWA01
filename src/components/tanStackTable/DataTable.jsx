import React from "react";
import GlobalFilter from "./GlobalFilter"; // Importieren Sie die neue Komponente
import "./DataTable.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel, getPaginationRowModel
} from "@tanstack/react-table";
import mainData from "./data/co2_data.json";
import { columnDef } from "./data/columnDef";
import Pagination from './Pagination';


const Table = () => {
  const finalData = React.useMemo(() => mainData, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const [sorting, setSorting] = React.useState([]);
  const [filtering, setFiltering] = React.useState("");

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  

  return (
    <> <div className="tableContainer">
      <GlobalFilter filter={filtering} setFilter={setFiltering} />
      <hr />
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => (
                <th
                  key={columnEl.id}
                  colSpan={columnEl.colSpan}
                  onClick={columnEl.column.getToggleSortingHandler()}
                >
                  {flexRender(
                    columnEl.column.columnDef.header,
                    columnEl.getContext()
                  )}
                  {/* Code for UP and DOWN sorting */}
                  {
                    columnEl.column.getIsSorted() === 'asc' ? " ↑" :
                    columnEl.column.getIsSorted() === 'desc' ? " ↓" :
                    " ↑↓"
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
      <div className="tableScroll">
        <table>
          <tbody>
            {tableInstance.getRowModel().rows.map((rowEl) => (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => (
                  <td key={cellEl.id}>
                    {flexRender(
                      cellEl.column.columnDef.cell,
                      cellEl.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination tableInstance={tableInstance} />
      </div>
    </>
  );
};

export default Table;