import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

const Categories = ({ categories, currentSlug }) => {
  const allCategory = Object.entries(categories);
  return (
    <div className="flex gap-4 flex-wrap p-8 bg-grayLight my-8 rounded-md shadow-sm ">
      {allCategory.map((cat) => {
        const decode = decodeURIComponent(cat[0].replace(/\+/g, " "));
        return (
          <Category
            key={cat[0]}
            link={`/categories/${decode}`}
            name={decode}
            active={currentSlug === slug(decode)}
            length={cat[1]}
          />
        );
      })}
    </div>
  );
};

export default Categories;
