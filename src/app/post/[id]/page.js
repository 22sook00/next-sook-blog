"use client";
import Loading from "@/src/components/loading/Loading";
import { NotionPage } from "@/src/components/notion";
import { useRouter } from "next/navigation";
//import { NotionAPI } from "notion-client";
//import React, { Suspense } from "react";
import React, { useState, useEffect, Suspense } from "react";
const PostPage = ({ params }) => {
  const router = useRouter();

  const rootPageId = params.id;
  //const notion = new NotionAPI();
  //const recordMap = await notion.getPage(rootPageId);
  //const blocks = await getNotionPageById(rootPageId);
  const [recordMap, setRecordMap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!rootPageId) return;
    const fetchPageData = async () => {
      try {
        const response = await fetch(`/api/notion?key=${rootPageId}`, {});

        if (!response.ok) {
          throw new Error("Page not found");
        }
        const data = await response.json();
        setLoading(false);
        setRecordMap(data);
      } catch (error) {
        setLoading(false);
        setError(error.message); // 오류 발생 시 에러 메시지 설정
      }
    };

    fetchPageData();
  }, [rootPageId]);

  if (loading) {
    return <Loading />; // 페이지 전환 시 로딩 UI
  }

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <NotionPage recordMap={recordMap} rootPageId={rootPageId} />
    </Suspense>
  );
};

export default PostPage;
