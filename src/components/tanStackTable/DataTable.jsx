import React, { useEffect, useState } from 'react';
import { extractUniqueOptions } from './ExtractOption';
import GlobalFilter from "./GlobalFilter";
import { filterByType } from "./CheckboxFilter";
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
import mainData from "./data/co2_data.json";
import { columnDef } from "./data/columnDef";
import Pagination from "./Pagination";

const Table = () => {
  const [typeFilter, setTypeFilter] = React.useState({});
  const [filterOptions, setFilterOptions] = useState([]); 
  const [sorting, setSorting] = React.useState([]);
  const [filtering, setFiltering] = React.useState("");

  const filteredData = React.useMemo(
    () => filterByType(mainData, typeFilter),
    [mainData, typeFilter]
  );
  const finalData = React.useMemo(() => mainData, []);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const [countryFilter, setCountryFilter] = React.useState({});
  const [countryOptions, setCountryOptions] = useState([]);
  
  useEffect(() => {
    const options = extractUniqueOptions(finalData, 'type'); 
    setFilterOptions(options);
  }, [finalData]);

  useEffect(() => {
    const options = extractUniqueOptions(finalData, 'country_name'); 
    setCountryOptions(options);
  }, [finalData]);

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
        <div >
          <GlobalFilter filter={filtering} setFilter={setFiltering} />
          <CheckboxFilterComponent
            buttonTitle="Type"
            options={filterOptions}
            selectedOptions={typeFilter}
            setSelectedOptions={setTypeFilter}
          />
        </div>

        <div >
        <CheckboxFilterComponent
          buttonTitle="Country"
          options={countryOptions}
          selectedOptions={countryFilter}
          setSelectedOptions={setCountryFilter}
        />
        </div>
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
