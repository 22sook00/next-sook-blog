"use client";
import React from "react";

import { Badge } from "react-ts-sook-ui";
import { slug } from "github-slugger";
import Link from "next/link";
import { format, parseISO } from "date-fns";

//import ViewCounter from "./ViewCounter";
import { CATEGORY_OBJ } from "@/src/utils/categoryData";

const BlogDetailBanner = ({ blog, slug: blogSlug }) => {
  const themeColor = CATEGORY_OBJ[blog.tags[0]]?.theme;
  return (
    <div className="mt-20 text-center relative w-full h-[310px] ">
      {blog && (
        <>
          <div className="w-full z-10 flex-col-center mb-2">
            <h1 className="title  w-[70%] break-keep">{blog.title}</h1>
            <Link href={`/categories/${slug(blog.tags[0])}`}>
              <Badge theme={themeColor} text={blog.tags[0]} size="lg" />
            </Link>
          </div>
          <div className="flex-col-center gap-2  text-gray text-xs">
            <time>{format(parseISO(blog.publishedAt), "LLLL d, yyyy")}</time>
            {/*<ViewCounter slug={blogSlug} />*/}
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetailBanner;
