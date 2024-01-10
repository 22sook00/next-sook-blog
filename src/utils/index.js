import { compareDesc, parseISO } from "date-fns";
import { convertBlogData, convertBlogProperties } from "./convert";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  //const convertBlog = convertBlogProperties(blogs);
  return blogs.sort((a, b) => {
    return compareDesc(
      parseISO(convertBlogData(a).date),
      parseISO(convertBlogData(b).date)
    );
  });
};
