import React, { useEffect, useState } from "react";
import { extractUniqueOptions } from "./ExtractOption";
import { filterByType } from "./TypeFilter";
import { filterByName } from "./NameFilter";
import CheckboxFilterComponent from "./CheckboxFilterComponent";
import DebouncedInput from "./DebounceFunction";

// Import hooks and utilities from react-table
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import mainData from "./data/co2_data.json";
import { columnDef } from "./data/columnDef";
import Pagination from "./Pagination";

const Table = () => {
  // State hooks for managing filters and options
  const [typeFilter, setTypeFilter] = React.useState({});
  const [nameFilter, setNameFilter] = React.useState({});
  const [filterOptions, setFilterOptions] = useState([]);
  const [nameOptions, setNameOptions] = useState([]);
  const [sorting, setSorting] = React.useState([]);
  const [filtering, setFiltering] = React.useState("");

  // useMemo hooks for optimized rendering
  const finalData = React.useMemo(() => mainData, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  

  // useMemo for filtering data based on selected filters
  const filteredData = React.useMemo(() => {
    let data = filterByType(mainData, typeFilter);
    data = filterByName(data, nameFilter);
    return data;
  }, [typeFilter, nameFilter]);

  // useEffect hooks to update options based on available data
  useEffect(() => {
    const options = extractUniqueOptions(filteredData, "type");
    setFilterOptions(options);
  }, [filteredData]);

  useEffect(() => {
    const options = extractUniqueOptions(filteredData, "name");
    setNameOptions(options);
  }, [filteredData]);

  // Function to reset all filters
  const resetFilters = () => {
    setTypeFilter({});
    setNameFilter({});
    setFiltering(""); // Resets global filter
  };

  // Initializing react-table instance with configuration
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
          <DebouncedInput
            value={filtering}
            onChange={setFiltering}
            debounce={500} // Delay in milliseconds
            placeholder="Search..."
          />
          <div className="filterDropdownContainer">
            <CheckboxFilterComponent
              buttonTitle="Type"
              options={filterOptions}
              selectedOptions={typeFilter}
              setSelectedOptions={setTypeFilter}
            />
            <CheckboxFilterComponent
              buttonTitle="Name"
              options={nameOptions}
              selectedOptions={nameFilter}
              setSelectedOptions={setNameFilter}
            />
          </div>
          <button className="btn btn-primary" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>
        <hr />
        <div className="tableScroll">
          <table>
            <thead className="thead">
              {/* Rendering table headers */}
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
                      {/* Display sort direction */}
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
              {/* Rendering table rows */}
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
        {/* Pagination component */}

        <Pagination className="pagination" tableInstance={tableInstance} />
      </div>
    </>
  );
};

export default Table;
