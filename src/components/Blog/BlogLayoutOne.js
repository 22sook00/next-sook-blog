"use client";
import React from "react";
import { format } from "date-fns";

import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";
import { Badge, Highlight } from "react-ts-sook-ui";
import { useRouter } from "next/navigation";
import "react-ts-sook-ui/dist/style.css";

const BlogLayoutOne = ({ blog, themeColor, thumbnailImg }) => {
  const router = useRouter();

  //타이틀, 날짜, 설명, git, slug 링크, 태그 필요.
  //이미지는 태그의 첫번째에 해당하는 부분으로 스태틱파일 선정.

  return (
    <>
      <div className="cursor-pointer group overflow-hidden dark:text-light border border-grayLight rounded-md p-7 bg-grayLight shadow-md">
        <div className="  w-full h-full  bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10 overflow-hidden">
          <Link href={`/blog/${blog.url}`}>
            <Image
              src={thumbnailImg}
              blurDataURL={thumbnailImg}
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
          <div onClick={() => router.push(`/categories/${slug(blog.url)}`)}>
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
