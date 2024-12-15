"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { convertBlogData } from "@/src/utils/convert";
import { THUMBNAIL_OBJ } from "@/src/utils/categoryData";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";

const CategoryList = ({ blogs }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px] mt-6">
      {blogs?.map((blog) => (
        <Link
          key={`blog-list-${blog.id}`}
          href={`/post/${blog.id}`}
          className="h-full rounded-xl overflow-hidden"
        >
          <article className="col-span-1 row-span-1 relative">
            <BlogLayoutThree
              thumbnailImg={
                THUMBNAIL_OBJ[convertBlogData(blog).badges[0]?.name]
              }
              blog={convertBlogData(blog)}
            />
          </article>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
