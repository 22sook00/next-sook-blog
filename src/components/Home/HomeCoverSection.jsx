import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Elements/Tag";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import { sortBlogs } from "@/src/utils";
import { slug } from "github-slugger";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-16 sm:mt-14  md:mt-22  flex-col-center">
      <h2 className="title  ">많이 본 포스팅</h2>

      <div className="w-full grid grid-rows-2 grid-flow-col md:grid-cols-[minmax(300px,_450px)_1fr]  gap-6 ">
        <article className="row-span-2 relative">
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className="row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className=" row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default HomeCoverSection;
