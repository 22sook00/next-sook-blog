"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { sortBlogs } from "@/src/utils";
import { THUMBNAIL_OBJ } from "@/src/utils/categoryData";
import { convertBlogData } from "@/src/utils/convert";

const BlogLayoutThree = dynamic(() => import("../Blog/BlogLayoutThree"));

const RecentPosts = ({ blogs }) => {
  return (
    <section className="w-full ">
      <div className="w-full flex justify-between items-center ">
        <h2 className="title">최근 포스팅</h2>
        <Link
          href="/categories/all"
          className="inline-block text-lg 
          underline underline-offset-4 text-accent mb-4 md:mb-6 font-medium"
        >
          더보기
        </Link>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 mt-4">
        {sortBlogs(blogs)
          .slice(0, 6)
          .map((blog) => {
            return (
              <Link
                key={`recent-blog-list-${blog.id}`}
                href={`/post/${blog.id}`}
                className="h-full"
              >
                <article className="col-span-1 row-span-1 ">
                  <BlogLayoutThree
                    thumbnailImg={
                      THUMBNAIL_OBJ[convertBlogData(blog).badges[0]?.name]
                    }
                    blog={convertBlogData(blog)}
                  />
                </article>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default RecentPosts;
