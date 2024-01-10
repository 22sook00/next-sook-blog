"use client";

import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge, Highlight } from "react-ts-sook-ui";

const BlogLayoutThree = ({ blog, themeColor, thumbnailImg }) => {
  return (
    <>
      <div
        className="group 
    h-[350px]
    flex flex-col items-center text-default dark:text-light border border-grayLight rounded-md  shadow"
      >
        <Link
          href={`/blog/${blog.url}`}
          className="h-full rounded-xl overflow-hidden"
        >
          <Image
            placeholder="blur"
            alt={blog.title}
            src={thumbnailImg}
            blurDataURL={thumbnailImg}
            width={200}
            height={150}
            className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
        </Link>

        <div className="flex flex-col gap-1 w-full mt-4 bg-grayLight p-6 h-[140px]">
          <Badge text={blog.badges[0].name} theme={themeColor} />

          <Link
            href={`/blog/${blog.url}`}
            className="inline-block my-1 textEllipsis "
          >
            <Highlight text={blog.title} theme={themeColor} />
          </Link>

          <span className="mt-3 capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
            {format(new Date(blog.date), "MMMM dd, yyyy")}
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogLayoutThree;
