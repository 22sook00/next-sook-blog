import { PROJECT_LIST } from "@/src/utils/aboutData";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full">
      <h2 className="title ">Project</h2>
      <div className="grid grid-cols-4 gap-4">
        {PROJECT_LIST.map((list) => {
          return (
            <div
              className=" w-full h-[300px] transition-all text-left rounded-md shadow-md  hover:shadow-lg p-4"
              key={list.ie}
            >
              <div className="bg-grayLight w-full h-2/4 mb-4"></div>
              <h1 className="text-lg font-semibold">{list.title}</h1>
              <p className="text-sm">{list.desc}</p>
              <Link
                href={list.link}
                target="_blank"
                className="transition-all text-accent hover:text-accentDark text-sm"
              >
                배포 사이트 구경하기
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
