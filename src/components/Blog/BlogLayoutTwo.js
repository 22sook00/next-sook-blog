"use client";
import { Fragment } from "react";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "@/src/components/common/card/Card";
import { BADGE_OBJ } from "@/src/utils/categoryData";
import { Badge, Highlight } from "react-ts-sook-ui";

const BlogLayoutTwo = ({ blog, themeColor, thumbnailImg }) => {
  return (
    <Link href={`/post/${blog.url}`}>
      <div className="group grid grid-cols-[170px,1fr] gap-4  text-default dark:text-light border dark:bg-dark dark:border-deepDark border-grayLight rounded-md p-6 bg-slate-50 shadow-md h-full">
        <div className=" h-full rounded-xl overflow-hidden">
          <Image
            placeholder="blur"
            alt={blog.title}
            src={thumbnailImg || "/stacks/js.png"}
            blurDataURL={thumbnailImg || "/stacks/js.png"}
            width={200}
            height={150}
            className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <section className="w-full">
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
        </section>
      </div>
    </Link>
  );
};

export default BlogLayoutTwo;
