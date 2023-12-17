import React from "react";
import { allBlogs } from "contentlayer/generated";
import { siteMetadata } from "@/src/utils/siteMetaData.js";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import BlogDetailBanner from "@/src/components/Blog/BlogDetailBanner";

import "react-ts-sook-ui/dist/style.css";
import BlogToc from "@/src/components/Blog/BlogToc";

const BlogPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  // -> generaMetadata 에도 동일하게 적용.
  return (
    <article className="default-layout">
      <BlogDetailBanner blog={blog} slug={params.slug} />
      <div className=" grid grid-cols-[3fr_1fr] gap-6  px-5 ">
        <RenderMdx blog={blog} />
        <BlogToc blog={blog} />
      </div>
    </article>
  );
};

export default BlogPage;
// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));
}
//동적 메타데이터 세팅
export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.filePath === "string"
        ? [siteMetadata.siteUrl + blog.image.filePath.replace("../public", "")]
        : blog.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}
