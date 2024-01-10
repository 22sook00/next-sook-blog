import React from "react";
import Link from "next/link";
import { convertBlogProperties } from "@/src/utils/convert";

const SearchList = ({ filteredSearch, query, handleClose }) => {
  return (
    <>
      <div className="z-30 absolute top-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ">
        {filteredSearch?.length === 0 && query !== "" ? (
          <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
            Nothing found.
          </div>
        ) : (
          filteredSearch?.map((keyword, idx) => (
            <div
              key={idx}
              className={`z-20 relative  hover:bg-grayLight bg-white e py-2 px-4 text-gray-900`}
            >
              <span className={`block truncate cursor-pointer text-left`}>
                <Link href={`blog/${convertBlogProperties(keyword).url}`}>
                  {convertBlogProperties(keyword).title}
                </Link>
              </span>
            </div>
          ))
        )}
      </div>
      <div className="animate-showmodal-bg default-fixed flex flex-col justify-center items-center  w-full h-full z-10">
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          onClick={handleClose}
        />
      </div>
    </>
  );
};

export default SearchList;
