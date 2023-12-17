"use client";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Badge, Highlight } from "react-ts-sook-ui";

const BlogLayoutTwo = ({ blog, themeColor }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-default dark:text-light border border-grayLight rounded-md p-6 bg-grayLight shadow-md">
      <Link
        href={blog.url}
        className=" col-span-12  lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <section className="col-span-12  lg:col-span-8 w-full h-full">
        <Badge text={blog.tags[0]} theme={themeColor} />
        <Link href={blog.url} className="inline-block my-1 beforeHighlight">
          <Highlight size="sm" text={blog.title} theme={themeColor} />
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </section>
    </div>
  );
};

export default BlogLayoutTwo;
