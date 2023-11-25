import React from "react";

const Pagination = ({ tableInstance }) => {
  return (
    
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-2"
          onClick={() => tableInstance.setPageIndex(0)}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-2"
          onClick={() => tableInstance.previousPage()}
          disabled={!tableInstance.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-2"
          onClick={() => tableInstance.nextPage()}
          disabled={!tableInstance.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-2"
          onClick={() => tableInstance.setPageIndex(tableInstance.getPageCount() - 1)}
          disabled={!tableInstance.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-2">
          <div>Page</div>
          <strong>
            {tableInstance.getState().pagination.pageIndex + 1} of{' '}
            {tableInstance.getPageCount()}
          </strong>
        </span>
        
        <select
          value={tableInstance.getState().pagination.pageSize}
          onChange={e => {
            tableInstance.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {/*dataQuery.isFetching ? 'Loading...' : null*/}
      </div>
  );
};

export default Pagination;
