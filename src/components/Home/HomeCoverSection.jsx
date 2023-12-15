"use client";
import React, { useState } from "react";
import { sortBlogs } from "@/src/utils";
import SearchList from "../Search/SearchList";
import { SearchIcon } from "../Icons";

const HomeCoverSection = ({ blogs }) => {
  const searchArr = sortBlogs(blogs);
  const [query, setQuery] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const filteredSearch =
    query === ""
      ? searchArr
      : searchArr?.filter((keyword) => {
          return (
            keyword.title
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, "")) ||
            [...keyword.tags][0]
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          );
        });
  const handleChange = (e) => {
    setQuery(e.target.value);
    setIsFocus(true);
  };
  const handleClose = () => {
    setQuery("");
    setIsFocus(false);
  };

  return (
    <section className="">
      <div className="w-full mt-20  flex-col-center text-center text-grayDark">
        <div className="flex gap-2 items-center">
          <h2 className="title ">Hello </h2>
          <h2 className="animate-shake  title ">👋🏻</h2>
        </div>
        <p className="text-lg">
          프론트엔드 개발자, SookDev 의 블로그에 오신것을 환영합니다.
        </p>
        <p className="text-lg">공부한 것들을 기록하고 나누는 공간입니다.</p>

        <p className="pre text-xs text-gray mt-1">
          Welcome to the blog of front-end developer, SookDev.
          <br />
          This is a blog where I record and share what I have studied.
        </p>
        <div className="mt-8 flex w-[240px] gap-2 items-center justify-center mb-2 relative">
          <input
            placeholder="Search keyword"
            className="default-input w-full h-[34px] "
            onChange={handleChange}
            value={query}
          />
          <SearchIcon className="absolute right-3 " />

          {isFocus && (
            <SearchList
              filteredSearch={filteredSearch}
              query={query}
              handleClose={handleClose}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeCoverSection;
