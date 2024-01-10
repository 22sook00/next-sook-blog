"use client";
import Link from "next/link";
import { slug } from "github-slugger";
import { format, parseISO } from "date-fns";
import { BADGE_OBJ } from "@/src/utils/categoryData";
import { Badge } from "react-ts-sook-ui";
import "react-ts-sook-ui/dist/style.css";

const Post = (props) => {
  const { title, content, badge, date } = props;
  const badgeName = badge.name;
  const badgeColor = BADGE_OBJ[badge.color];

  return (
    <article className="default-layout">
      <div className="mt-20 text-center relative w-full h-[310px] ">
        <div className="w-full z-10 flex-col-center mb-2">
          <h1 className="title  w-[70%] break-keep">{title}</h1>
          <Link href={`/categories/${slug(badgeName)}`}>
            <Badge theme={badgeColor} text={badgeName} size="lg" />
          </Link>
        </div>
        <div className="flex-col-center gap-2  text-gray text-xs">
          <time>{format(parseISO(date.start), "LLLL d, yyyy")}</time>
        </div>
      </div>
      <div className=" grid grid-cols-[3fr_1fr] gap-6  px-5 ">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {/*<BlogToc blog={blog} />*/}
      </div>
    </article>
  );
};
export default Post;
