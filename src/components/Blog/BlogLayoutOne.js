"use client";
import React from "react";
import { format } from "date-fns";

import Link from "next/link";
import Image from "next/image";
import { Badge, Highlight } from "react-ts-sook-ui";
import { useRouter } from "next/navigation";

const BlogLayoutOne = ({ blog, themeColor, thumbnailImg }) => {
  //console.log("blog", blog);
  const router = useRouter();
  return (
    <>
      <div className="cursor-pointer group overflow-hidden dark:text-light border border-grayLight rounded-md p-7 bg-grayLight shadow-md">
        <div className="  w-full h-full  bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10 overflow-hidden">
          <Link href={`/blog/${blog.url}`}>
            <Image
              src={thumbnailImg || "/stacks/js.png"}
              blurDataURL={thumbnailImg || "/stacks/js.png"}
              placeholder="blur"
              alt={blog.title}
              width={200}
              height={150}
              className=" w-full h-full object-center object-cover overflow-hidden group-hover:scale-105 transition-all ease duration-300"
              sizes="(max-width: 1180px) 100vw, 50vw"
            />
          </Link>
        </div>
        <section className="mt-10">
          <div onClick={() => router.push(`/categories/${blog.url}`)}>
            <Badge
              size="lg"
              text={blog.badges[0].name}
              theme={themeColor || "success"}
            />
          </div>
          <Link href={`/blog/${blog.url}`} className="mt-6 beforeHighlight">
            <Highlight
              size="lg"
              text={blog.title}
              theme={themeColor || "success"}
            />
          </Link>
          <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
            {format(new Date(blog.date), "MMMM dd, yyyy")}
          </span>
        </section>
      </div>
    </>
  );
};

export default BlogLayoutOne;
