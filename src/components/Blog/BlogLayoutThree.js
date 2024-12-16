"use client";

import { format } from "date-fns";
import Image from "next/image";

import React, { Fragment } from "react";
import { Badge, Highlight } from "react-ts-sook-ui";
import { BADGE_OBJ } from "@/src/utils/categoryData";
const BlogLayoutThree = ({ blog, thumbnailImg, isPriority = false }) => {
  return (
    <div className="group h-[350px] flex flex-col items-center text-default dark:text-light border border-grayLight dark:border-deepDark rounded-md shadow  overflow-hidden">
      <div className="h-full ">
        <Image
          placeholder="blur"
          alt={blog.title}
          src={thumbnailImg || "/stacks/js.png"}
          blurDataURL={thumbnailImg || "/stacks/js.png"}
          width={300}
          height={200}
          className=" aspect-[4/1] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          priority={isPriority}
          format={"image/avif"}
        />
      </div>

      <div className="flex flex-col gap-1 w-full  bg-grayLight p-6 h-[140px] dark:bg-dark ">
        <div className="flex gap-2">
          {blog.badges.map((badge) => {
            const themeColor = BADGE_OBJ[badge?.color];
            return (
              <Fragment key={badge.id}>
                <Badge text={badge.name} theme={themeColor} />
              </Fragment>
            );
          })}
        </div>

        <div className="inline-block my-1  text-ellipsis line-clamp-1 ">
          {/*<Highlight text={blog.title} theme={"success"} />*/}
          {blog.title}
        </div>

        <span className="mt-3 capitalize text-gray  font-semibold text-sm sm:text-base ">
          {format(new Date(blog.date), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
