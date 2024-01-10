import React from "react";

const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-accent dark:bg-accentDark text-light dark:text-default whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text, idx) => (
          <div key={`${text}-${idx}`}>{text}</div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
