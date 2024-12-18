"use client";

import { format } from "date-fns";

import React, { Fragment } from "react";
import { Badge } from "react-ts-sook-ui";
import { BADGE_OBJ } from "@/src/utils/categoryData";
import { Card } from "../common/card/Card";
const BlogLayoutThree = ({ blog, thumbnailImg, isPriority = false }) => {
  return (
    <Card size="md">
      <Card.Thumbnail
        list={{ ...blog, img: thumbnailImg || "/stacks/js.png" }}
        isPriority={isPriority}
      />
      <Card.Title>{blog.title}</Card.Title>
      <Card.Desc line={2}>{blog.desc}</Card.Desc>
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
        <p className="capitalize text-gray text-xs mt-2">
          {format(new Date(blog.date), "MMMM dd, yyyy")}
        </p>
      </Card.Footer>
    </Card>
  );
};

export default BlogLayoutThree;
