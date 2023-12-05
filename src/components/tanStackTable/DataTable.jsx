import React, { useEffect, useState } from "react";
import { extractUniqueOptions } from "./ExtractOption";
import GlobalFilter from "./GlobalFilter";
import { filterByType } from "./TypeFilter";
import { filterByName } from "./NameFilter";
import CheckboxFilterComponent from "./CheckboxFilterComponent";
import "./DataTable.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import mainData from "./data/co2_data_copy.json";
import { columnDef } from "./data/columnDef";
import Pagination from "./Pagination";

const Table = () => {
  const [typeFilter, setTypeFilter] = React.useState({});
  const [nameFilter, setNameFilter] = React.useState({});
  const [filterOptions, setFilterOptions] = useState([]);
  const [nameOptions, setNameOptions] = useState([]);
  const [sorting, setSorting] = React.useState([]);
  const [filtering, setFiltering] = React.useState("");

  const finalData = React.useMemo(() => mainData, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const resetFilters = () => {
    setTypeFilter({});
    setNameFilter({});
    setFiltering(""); // Setzt den globalen Filter zurück, falls verwendet
  };

  useEffect(() => {
    const options = extractUniqueOptions(finalData, "type");
    setFilterOptions(options);
  }, [finalData]);

  useEffect(() => {
    const options = extractUniqueOptions(finalData, "name");
    setNameOptions(options);
  }, [finalData]);

  const filteredData = React.useMemo(() => {
    let data = filterByType(mainData, typeFilter);
    data = filterByName(data, nameFilter);
    return data;
  }, [mainData, typeFilter, nameFilter]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: filteredData,
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
    <>
      <div className="tableContainer">
        <div className="filterContainer">
          <GlobalFilter filter={filtering} setFilter={setFiltering} />
          
          <div className="filterDropdownContainer">
          <div>
            <CheckboxFilterComponent
              buttonTitle="Type"
              options={filterOptions}
              selectedOptions={typeFilter}
              setSelectedOptions={setTypeFilter}
            />
          </div>

          <div>
            <CheckboxFilterComponent
              buttonTitle="Name"
              options={nameOptions}
              selectedOptions={nameFilter}
              setSelectedOptions={setNameFilter}
            />
          </div>
          </div>
          <button className="btn btn-primary" onClick={resetFilters}>
            Filter zurücksetzen
          </button>
        </div>
        <hr />

        <div className="tableScroll">
          <table>
            <thead className="thead">
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
                      {columnEl.column.getIsSorted() === "asc"
                        ? " ↑"
                        : columnEl.column.getIsSorted() === "desc"
                        ? " ↓"
                        : " "}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
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
        <Pagination className="pagination" tableInstance={tableInstance} />
      </div>
    </>
  );
};

export default Table;
