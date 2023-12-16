"use client";
import React from "react";
import { format } from "date-fns";

import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";
import { Badge, Highlight } from "react-ts-sook-ui";
import { useRouter } from "next/navigation";

const BlogLayoutOne = ({ blog, themeColor }) => {
  console.log(`
  ███████╗ ██████╗  ██████╗ ██╗  ██╗
  ██╔════╝██╔═══██╗██╔═══██╗██║ ██╔╝
  ███████╗██║   ██║██║   ██║█████╔╝ 
  ╚════██║██║   ██║██║   ██║██╔═██╗ 
  ███████║╚██████╔╝╚██████╔╝██║  ██╗
  ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
  `);
  const router = useRouter();

  return (
    <div className="cursor-pointer group overflow-hidden dark:text-light">
      <div className="  w-full h-full  bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10 overflow-hidden">
        <Link href={blog.url}>
          <Image
            src={blog.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl}
            alt={blog.title}
            width={blog.image.width}
            height={blog.image.height}
            className=" w-full h-full object-center object-cover overflow-hidden group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 1180px) 100vw, 50vw"
          />
        </Link>
      </div>
      <section className="mt-10">
        <div onClick={() => router.push(`/categories/${slug(blog.tags[0])}`)}>
          <Badge size="lg" text={blog.tags[0]} theme={themeColor} />
        </div>
        <Link href={blog.url} className="mt-6 beforeHighlight">
          <Highlight size="lg" text={blog.title} theme={themeColor} />
        </Link>
        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </section>
    </div>
  );
};

export default BlogLayoutOne;
