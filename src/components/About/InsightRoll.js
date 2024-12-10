import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="flex justify-between items-center w-full bg-accentLight dark:bg-accentDark text-default dark:text-default whitespace-nowrap overflow-hidden rounded-md mt-4">
      <div className="animate-roll w-[90%] py-2 sm:py-3 flex items-center gap-2 justify-start capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, idx) => (
          <div key={`${text}-${idx}`}>{text} </div>
        ))}
      </div>
      <div className=" cursor-pointer mr-4 z-50 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default InsightRoll;
