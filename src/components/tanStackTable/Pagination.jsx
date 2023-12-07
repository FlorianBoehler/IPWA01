import React from "react";

// Pagination component to handle table pagination
const Pagination = ({ tableInstance }) => {
  return (
    <div className="flex items-center gap-2">
      {/* Button to go to the first page */}
      <button
        className="border rounded p-2"
        onClick={() => tableInstance.setPageIndex(0)}
        disabled={!tableInstance.getCanPreviousPage()} // Disabled if no previous page available
      >
        {'<<'}
      </button>

      {/* Button to go to the previous page */}
      <button
        className="border rounded p-2"
        onClick={() => tableInstance.previousPage()}
        disabled={!tableInstance.getCanPreviousPage()} // Disabled if no previous page available
      >
        {'<'}
      </button>

      {/* Button to go to the next page */}
      <button
        className="border rounded p-2"
        onClick={() => tableInstance.nextPage()}
        disabled={!tableInstance.getCanNextPage()} // Disabled if no next page available
      >
        {'>'}
      </button>

      {/* Button to go to the last page */}
      <button
        className="border rounded p-2"
        onClick={() => tableInstance.setPageIndex(tableInstance.getPageCount() - 1)}
        disabled={!tableInstance.getCanNextPage()} // Disabled if no next page available
      >
        {'>>'}
      </button>

      {/* Display current page and total page count */}
      <div>Page</div>
      <strong>
        {tableInstance.getState().pagination.pageIndex + 1} of{' '}
        {tableInstance.getPageCount()}
      </strong>

      {/* Dropdown to select page size */}
      <select 
        value={tableInstance.getState().pagination.pageSize}
        onChange={e => {
          tableInstance.setPageSize(Number(e.target.value))
        }}
      >
        {/* Options for page size */}
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default Pagination;