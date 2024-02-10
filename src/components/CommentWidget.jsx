import React, { useRef, createRef, FunctionComponent, useEffect } from "react";

const src = "https://utteranc.es/client.js";
const repo = "22sook00/next-sook-blog"; // 자신 계정의 레포지토리로 설정
//const repo = "22sook00/sook-dev.vercel.app";

const CommentWidget = () => {
  const commentsEl = useRef(null);
  useEffect(() => {
    const existingScript = commentsEl.current?.querySelector(
      `script[src="${src}"]`
    );
    if (existingScript) return;

    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = src;
    scriptEl.setAttribute("repo", repo);
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");

    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return (
    <div ref={commentsEl} className="w-full h-fit m-auto px-5 lg:px-0 my-20" />
  );
};

export default CommentWidget;
