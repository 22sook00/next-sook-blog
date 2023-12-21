import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import { sortBlogs } from "@/src/utils";

import { CATEGORY_OBJ } from "@/src/utils/categoryData";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full flex-col-center items-start">
      <h2 className="title">추천 포스팅</h2>

      <div className="w-full grid grid-rows-2 grid-flow-col md:grid-cols-[minmax(300px,_450px)_1fr] mt-4 gap-6 ">
        <article className="row-span-2 relative">
          <BlogLayoutOne
            blog={sortedBlogs[1]}
            themeColor={CATEGORY_OBJ[sortedBlogs[1].tags[0]]?.theme}
          />
        </article>
        <article className="row-span-1 relative">
          <BlogLayoutTwo
            blog={sortedBlogs[2]}
            themeColor={CATEGORY_OBJ[sortedBlogs[2].tags[0]]?.theme}
          />
        </article>
        <article className=" row-span-1 relative">
          <BlogLayoutTwo
            blog={sortedBlogs[3]}
            themeColor={CATEGORY_OBJ[sortedBlogs[3].tags[0]]?.theme}
          />
        </article>
      </div>
    </section>
  );
};

export default HomeCoverSection;
