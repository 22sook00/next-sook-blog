import React from "react";

const BlogToc = ({ blog }) => {
  return (
    <aside className="">
      <details
        className="border border-line dark:border-light shadow-md text-default dark:text-light rounded-lg p-6 sticky top-20 max-h-[80vh]  overflow-y-auto"
        open
      >
        <summary className="font-semibold capitalize cursor-pointer">
          Table Of Content
        </summary>
        <ul className="mt-4 font-in text-sm ">
          {blog.toc.map((heading) => {
            return (
              <li key={`#${heading.slug}`} className="py-1">
                <a
                  href={`#${heading.slug}`}
                  data-level={heading.level}
                  className="data-[level=two]:pl-0  data-[level=two]:pt-2
                               data-[level=two]:border-t border-dashed border-gray
                               data-[level=three]:pl-4
                               sm:data-[level=three]:pl-6
                               flex items-center justify-start
                                leading-6
                   "
                >
                  {heading.level === "three" ? (
                    <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                      &nbsp;
                    </span>
                  ) : null}

                  <span className="hover:underline">{heading.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </details>
    </aside>
  );
};

export default BlogToc;
