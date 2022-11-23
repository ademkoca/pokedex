import React from 'react';

const Pagination = ({
  offset,
  setOffset,
  prevPage,
  nextPage,
  count,
  top,
  visible,
  data,
  paginate,
  postsPerPage,
  indexOfFirstPost,
  indexOfLastPost,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (!visible) {
    return null;
  }

  return (
    <div
      className={`flex items-center justify-between ${
        top ? 'border-0 mb-3' : 'border-t'
      } border-gray-200 bg-white px-4 py-3 sm:px-6`}
    >
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          // disabled={prevPage === null}
          onClick={() => paginate(currentPage - 1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <p className="text-sm text-gray-700 mt-2">
          Page {currentPage} of {pageNumbers.length}
        </p>
        <button
          // disabled={nextPage === null}
          onClick={() => paginate(currentPage + 1)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-col sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex flex-wrap -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              // disabled={prevPage === null}
              onClick={() => paginate(currentPage - 1)}
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {pageNumbers.map((p) => (
              <button
                key={p}
                onClick={() => paginate(p)}
                href="#"
                aria-current="page"
                className={`${
                  p == currentPage ? 'bg-[#F3666D]' : 'bg-red-50'
                } relative z-10 inline-flex items-center border border-[#ED1A25] px-4 py-2 text-sm font-medium text-red-600 focus:z-20`}
              >
                {p}
              </button>
            ))}

            <button
              // disabled={Number(e.target.value) > pageNumbers[-1]}
              onClick={() => paginate(currentPage + 1)}
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
        <div>
          <p className="text-sm text-gray-700 mt-4">
            Showing <span className="font-medium">{indexOfFirstPost + 1} </span>
            to{' '}
            <span className="font-medium">
              {indexOfFirstPost + 50 > count ? count : indexOfLastPost}{' '}
            </span>
            of <span className="font-medium">{count} </span>
            results
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
