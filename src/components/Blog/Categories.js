"use client";

import React from "react";
import Category from "./Category";
import { useParams } from "next/navigation";

const Categories = ({ allPosts }) => {
  const currentSlug = useParams().slug;
  const allCategory = allPosts.map((el) => {
    return { id: el.id, properties: el.properties.tag.multi_select };
  });

  const categoryCounts = {};
  allCategory.forEach((category) => {
    category.properties.forEach((subCategory) => {
      categoryCounts[subCategory.name] =
        (categoryCounts[subCategory.name] || 0) + 1;
    });
  });

  const categoryList = Object.entries({
    all: allPosts.length,
    ...categoryCounts,
  });

  return (
    <div className="flex gap-2 md:gap-4 flex-wrap p-4 md:p-8 bg-grayLight my-0 md:my-8 rounded-md shadow-sm w-full ">
      {categoryList.map((cat, idx) => {
        const decode = decodeURIComponent(cat[0].replace(/\+/g, " "));

        return (
          <Category
            key={cat[0]}
            link={`/categories/${decode}`}
            name={decode}
            active={currentSlug.toUpperCase() === cat[0].toUpperCase()}
            length={cat[1]}
          />
        );
      })}
    </div>
  );
};

export default Categories;
