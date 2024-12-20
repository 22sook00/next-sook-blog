"use client";
import React, { Fragment } from "react";
import { format } from "date-fns";
import { BADGE_OBJ } from "@/src/utils/categoryData";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "react-ts-sook-ui";
import { useRouter } from "next/navigation";
import { Card } from "@/src/components/common/card/Card";

const BlogLayoutOne = ({ blog, themeColor, thumbnailImg }) => {
  console.log("themeColor", themeColor);
  const router = useRouter();
  return (
    <Link href={`/post/${blog.url}`}>
      <div className="cursor-pointer group overflow-hidden dark:text-light border border-grayLight rounded-md p-7 bg-slate-50 dark:bg-dark dark:border-deepDark shadow-md">
        <div className=" mb-4 w-full h-full  bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10 overflow-hidden">
          <Image
            src={thumbnailImg || "/stacks/js.png"}
            blurDataURL={thumbnailImg || "/stacks/js.png"}
            placeholder="blur"
            alt={blog.title}
            width={200}
            height={150}
            className=" w-full h-full object-center object-cover overflow-hidden group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 600px) 100vw, (max-width: 1180px) 50vw, 33vw"
            priority
            format={"image/avif"}
          />
        </div>

        <Card.Title>{blog.title}</Card.Title>
        <Card.Desc>{blog.desc}</Card.Desc>

        <Card.Footer className="mt-2">
          <div className="flex-wrap flex gap-2">
            {blog.badges.map((badge) => {
              const themeColor = BADGE_OBJ[badge?.color];

              return (
                <Fragment key={badge.id}>
                  <Badge
                    size="sm"
                    text={badge.name}
                    theme={themeColor || "primary"}
                  />
                </Fragment>
              );
            })}
          </div>
          <p className="mt-2 capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
            {format(new Date(blog.date), "MMMM dd, yyyy")}
          </p>
        </Card.Footer>
      </div>
    </Link>
  );
};

export default BlogLayoutOne;
