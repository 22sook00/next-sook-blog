import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";

import { BADGE_OBJ, THUMBNAIL_OBJ } from "@/src/utils/categoryData";
import { convertBlogData } from "@/src/utils/convert";

const HomeCoverSection = ({ blogs }) => {
  return (
    <section className="w-full flex-col-center items-start">
      <h2 className="title">추천 포스팅</h2>

      <div className="w-full grid grid-rows-2 grid-flow-col md:grid-cols-[minmax(300px,_450px)_1fr] mt-4 gap-6 ">
        <article className="row-span-2 relative">
          <BlogLayoutOne
            blog={convertBlogData(blogs, 1)}
            themeColor={BADGE_OBJ[convertBlogData(blogs, 1).badges[0]?.color]}
            thumbnailImg={
              THUMBNAIL_OBJ[convertBlogData(blogs, 1).badges[0]?.name]
            }
          />
        </article>
        <article className="row-span-1 relative">
          <BlogLayoutTwo
            blog={convertBlogData(blogs, 2)}
            themeColor={BADGE_OBJ[convertBlogData(blogs, 2).badges[0]?.color]}
            thumbnailImg={
              THUMBNAIL_OBJ[convertBlogData(blogs, 2).badges[0]?.name]
            }
          />
        </article>
        <article className=" row-span-1 relative">
          <BlogLayoutTwo
            blog={convertBlogData(blogs, 3)}
            themeColor={BADGE_OBJ[convertBlogData(blogs, 3).badges[0]]?.color}
            thumbnailImg={
              THUMBNAIL_OBJ[convertBlogData(blogs, 3).badges[0]?.name]
            }
          />
        </article>
      </div>
    </section>
  );
};

export default HomeCoverSection;
