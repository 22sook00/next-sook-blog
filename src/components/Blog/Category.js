"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-ts-sook-ui";
import "react-ts-sook-ui/dist/style.css";
const Category = ({ link = "#", name, active, length, ...props }) => {
  const router = useRouter();

  return (
    <Button
      isOutline={active ? false : true}
      onClick={() => router.push(`${link}`)}
      size="sm"
      theme="success"
    >
      {name.toUpperCase()} ({length})
    </Button>
  );
};

export default Category;
