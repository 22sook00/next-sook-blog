"use client";
import { PROJECT_LIST } from "@/src/utils/aboutData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card } from "../common/card/Card";

const Projects = () => {
  return (
    <section className="w-full">
      <h2 className="title mb-4 md:mb-6">Project</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
        {PROJECT_LIST.map((list) => {
          return (
            <Card key={list.id}>
              <Card.Thumbnail list={list} />
              <Card.Title>{list.title}</Card.Title>
              <Card.Desc>{list.desc} </Card.Desc>
              <Card.Footer>
                {list.link !== "-" && list.code !== "sookDevBlog" && (
                  <Link
                    href={list.link}
                    target="_blank"
                    className="
                      cursor-pointer
                      transition-all text-accent hover:text-accentDark text-sm"
                  >
                    배포 사이트 구경하기
                  </Link>
                )}
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
