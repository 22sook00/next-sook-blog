import React from "react";

const Head = () => {
  return (
    <>
      <title>My Page Title</title>
      <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE}
      />
      <meta
        name="naver-site-verification"
        content={process.env.NEXT_PUBLIC_NAVER_SEARCH_ADVISOR}
      />
    </>
  );
};

export default Head;
