import { INVOLVED_OBJ } from "@/src/utils/aboutData";
import React from "react";

const Experience = () => {
  return (
    <section className="w-full">
      <h2 className="title mb-4 md:mb-6 ">experience</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 ">
        <div>
          <h3 className="sub-title">work</h3>
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2">
              <span className="bg-grayLight text-center py-1 w-[115px] rounded text-xs">
                2022.09 - 2024.11
              </span>
              <span className="text-sm dark:text-white">스퀘어스</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
            </div>
            <div className="flex gap-2">
              <span className="bg-grayLight text-center py-1 w-[115px] rounded text-xs">
                2021.11 - 2022-09
              </span>
              <span className="text-sm dark:text-white">엔코위더스</span>
            </div>{" "}
          </div>
        </div>
        <div>
          <h3 className="sub-title">involved</h3>
          <div className="flex flex-col gap-2 ">
            {Object.entries(INVOLVED_OBJ).map((list) => {
              return (
                <div
                  className="flex gap-2 items-center"
                  key={`involved-${list[0]}`}
                >
                  <span className="bg-grayLight text-center py-1 w-[115px] rounded text-xs ">
                    {list[0]}
                  </span>
                  <span className="text-[13px] md:text-sm dark:text-white">
                    {list[1]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
