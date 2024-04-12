type Props = {
  currentPage: number;
  totalPages: number;
};

const Pagination = ({ currentPage, totalPages }: Props) => {
  return (
    <div className={`w-full flex items-center justify-center`}>
      <div className={`flex items-center gap-x-2`}>
        <button className={`w-10 h-10 flex items-center justify-center`}>
          <svg
            className={`w-4 h-4`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className={`flex items-center gap-x-2`}>
          <button
            className={`w-10 h-10 flex items-center justify-center ${
              currentPage === 1
                ? "underline font-semibold"
                : "font-medium hover:text-vv-orange"
            }`}
          >
            1
          </button>
          <button
            className={`w-10 h-10 flex items-center justify-center ${
              currentPage === 2
                ? "underline font-semibold"
                : "font-medium hover:text-vv-orange"
            }`}
          >
            2
          </button>
          <button
            className={`w-10 h-10 flex items-center justify-center ${
              currentPage === 3
                ? "underline font-semibold"
                : "font-medium hover:text-vv-orange"
            }`}
          >
            3
          </button>
          {totalPages < 3 && (
            <button
              className={`w-10 h-10 flex items-center justify-center hover:text-vv-orange`}
            >
              ...
            </button>
          )}
        </div>
        <button
          className={`w-10 h-10 flex items-center justify-center hover:text-vv-orange`}
        >
          <svg
            className={`w-4 h-4`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
