"use client";
import { sortBlogs } from "@/src/utils";
import { THUMBNAIL_OBJ, BADGE_OBJ } from "@/src/utils/categoryData";
import { convertBlogData } from "@/src/utils/convert";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  return (
    <section className="w-full ">
      <div className="w-full flex justify-between items-center ">
        <h2 className="title">최근 포스팅</h2>
        <Link
          href="/categories/all"
          className="inline-block text-lg 
          underline underline-offset-2 "
        >
          더 보기
        </Link>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-16 mt-4">
        {sortBlogs(blogs)
          .slice(0, 6)
          .map((blog, index) => {
            return (
              <article key={index} className="col-span-1 row-span-1 relative">
                <BlogLayoutThree
                  thumbnailImg={
                    THUMBNAIL_OBJ[convertBlogData(blog).badges[0]?.name]
                  }
                  themeColor={BADGE_OBJ[convertBlogData(blog).badges[0]?.color]}
                  blog={convertBlogData(blog)}
                />
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default RecentPosts;
