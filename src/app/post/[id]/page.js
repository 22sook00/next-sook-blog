//"use client";
import React, { Suspense } from "react";
//import { dehydrate, useQuery,QueryClient } from "@tanstack/react-query";
import Loading from "@/src/components/loading/Loading";
import { NotionPage } from "@/src/components/notion";
import { getNotionPageById } from "@/src/utils/notion";
//import { useRouter } from "next/navigation";

//const fetchNotionPage = async (rootPageId) => {
//  const response = await fetch(`/api/notion?key=${rootPageId}`);
//  if (!response.ok) throw new Error("Page not found");
//  return response.json();
//};
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const revalidate = 60;
const PostPage = async ({ params }) => {
  //const router = useRouter();
  //const queryClient = new QueryClient();
  const rootPageId = params.id;

  //const { data: recordMap, isLoading } = useQuery({
  //  queryKey: ["notionPage", rootPageId],
  //  queryFn: () => fetchNotionPage(rootPageId),
  //  onError: (error) => {
  //    alert("에러가 발생했습니다. 다시 시도해주세요.");
  //    router.back();
  //  },
  //});
  // 서버에서 데이터를 미리 패칭하여 React Query에 넣기
  // await queryClient.prefetchQuery(["notionPage", rootPageId], () => fetchNotionPage(rootPageId));
  // const dehydratedState = dehydrate(queryClient);

  const response = await fetch(`${baseUrl}/api/notion?key=${rootPageId}`);
  if (!response.ok) throw new Error("Page not found");
  const recordMap = await response.json();

  //if (isLoading) {
  //  return <Loading />; // 페이지 전환 시 로딩 UI
  //}

  //console.log("====recordMap", recordMap);

  return (
    <Suspense fallback={<Loading />}>
      <NotionPage recordMap={recordMap} rootPageId={rootPageId} />
    </Suspense>
  );
};

export default PostPage;

export async function generateMetadata({ params }) {
  const { id } = params;
  const metaData = await getNotionPageById(id);

  const title =
    metaData?.properties.title.title[0]?.plain_text || "블로그 컨텐츠 타이틀";
  const desc =
    metaData?.properties.desc.rich_text[0]?.plain_text || "블로그 컨텐츠 설명";

  return {
    title,
    desc,
  };
}
