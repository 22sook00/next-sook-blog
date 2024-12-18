import { PROJECT_LIST } from "@/src/utils/aboutData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full">
      <h2 className="title mb-4 md:mb-6">Project</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
        {PROJECT_LIST.map((list) => {
          return (
            <div
              className=" w-full h-[300px] transition-all text-left rounded-md shadow-md hover:shadow-lg p-4 flex flex-col flex-start gap-2 border border-grayLight"
              key={list.id}
            >
              <Image
                blurDataURL={list.img}
                placeholder="blur"
                width={100}
                height={150}
                src={list.img}
                alt={list.title}
                className="w-full h-[150px] object-center object-cover overflow-hidden "
                sizes="(max-width: 1180px) 100vw, 50vw"
              />
              <div>
                <h1 className="text-lg font-semibold dark:text-white mb-1">
                  {list.title}
                </h1>
                <p className="text-sm dark:text-light">{list.desc}</p>
                {list.link === "-" && (
                  <p className="transition-all text-gray mt-1 text-sm dark:text-gray">
                    진행중인 프로젝트 입니다.
                  </p>
                )}

                {list.link !== "-" && list.code !== "sookDevBlog" && (
                  <Link
                    href={list.link}
                    target="_blank"
                    className="transition-all text-accent hover:text-accentDark text-sm"
                  >
                    배포 사이트 구경하기
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
