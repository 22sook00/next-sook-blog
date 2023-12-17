"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-ts-sook-ui";

const Category = ({ link = "#", name, active, length, ...props }) => {
  const router = useRouter();

  return (
    <Button
      isOutline={active ? false : true}
      onClick={() => router.push(`${link}`)}
      size="sm"
      theme="success"
      text={`${name.toUpperCase()} (${length}) `}
    />
  );
};

export default Category;