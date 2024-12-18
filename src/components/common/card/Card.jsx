"use client";

import Image from "next/image";
import { Children, isValidElement } from "react";

const Thumbnail = ({ list, isPriority = false }) => {
  return (
    <div className="w-full h-[150px] flex justify-center overflow-hidden">
      <Image
        src={list.img}
        alt={list.title}
        placeholder="blur"
        blurDataURL={list.img}
        width={250}
        height={180}
        className="object-cover object-center"
        sizes="(max-width: 1180px) 100vw, 50vw"
        priority={isPriority}
        format={"image/avif"}
      />
    </div>
  );
};
const Title = ({ children }) => {
  return (
    <h1
      className="
    text-ellipsis line-clamp-1
    text-lg font-semibold dark:text-white mb-1"
    >
      {children}
    </h1>
  );
};
const Desc = ({ children, line = 3 }) => {
  const lineClamp =
    line === 1 ? "line-clamp-1" : line === 2 ? "line-clamp-2" : "line-clamp-3";
  return (
    <p
      className={`
      ${lineClamp}
     text-ellipsis
    cursor-default text-sm text-grayDark dark:text-light
    `}
    >
      {children}
    </p>
  );
};
const Footer = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};
const CardMain = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);
  // 특정 컴포넌트 타입 추출
  const ThumbnailType = (<Thumbnail list={{}} />).type;
  const thumbnail = childrenArray.find(
    (child) => isValidElement(child) && child.type === ThumbnailType
  );

  const restChildren = childrenArray.filter(
    (child) => !(isValidElement(child) && child.type === ThumbnailType)
  );

  return (
    <div
      className=" w-full h-[300px] transition-all text-left rounded-md shadow-md hover:shadow-lg flex flex-col flex-start  border border-grayLight"
      {...props}
    >
      {thumbnail}
      <div className="p-4 bg-slate-50 h-[155px]">{restChildren}</div>
    </div>
  );
};

export const Card = Object.assign(CardMain, {
  Thumbnail,
  Title,
  Desc,
  Footer,
});
