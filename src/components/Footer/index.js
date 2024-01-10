"use client";
import React from "react";
import { LinkIcon } from "../Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" default-layout flex-col-center items-end gap-1 mt-36 mb-20">
      <Link
        href="https://github.com/22sook00"
        target={"_blank"}
        className="flex-row-center gap-1"
      >
        <LinkIcon style={{ strokeWidth: "2px" }} />
        <p> Github</p>
      </Link>
      <p className=" text-sm text-gray">
        &copy;2023 22sook00. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
