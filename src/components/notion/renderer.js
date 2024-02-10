"use client";
import { NotionRenderer } from "react-notion-x";
import Link from "next/link";
import dynamic from "next/dynamic";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import BlogToc from "../Blog/BlogToc";
import CommentWidget from "../CommentWidget";

const Code = dynamic(() =>
  import("react-notion-x/build/third-party/code").then((m) => m.Code)
);
const Collection = dynamic(() =>
  import("react-notion-x/build/third-party/collection").then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import("react-notion-x/build/third-party/equation").then((m) => m.Equation)
);

const Modal = dynamic(
  () => import("react-notion-x/build/third-party/modal").then((m) => m.Modal),
  {
    ssr: false,
  }
);

export const NotionPage = ({ recordMap, rootPageId }) => {
  if (!recordMap) {
    return null;
  }

  return (
    <div className="notion__container">
      {/*<div>hihi</div>*/}
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        //darkMode={true}
        rootPageId={rootPageId}
        previewImages
        components={{
          nextLink: Link,
          Code,
          Collection,
          Equation,
          Modal,
        }}
      />
      <CommentWidget />
    </div>
  );
};
