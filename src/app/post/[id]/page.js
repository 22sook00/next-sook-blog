import React, { Suspense } from "react";
import Loading from "@/src/components/loading/Loading";
import { NotionPage } from "@/src/components/notion";
import { getNotionPageById } from "@/src/utils/notion";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const revalidate = 60;
const PostPage = async ({ params }) => {
  const rootPageId = params.id;

  const response = await fetch(`${baseUrl}/api/notion?key=${rootPageId}`);
  if (!response.ok) throw new Error("Page not found");
  const recordMap = await response.json();

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
    metaData?.properties.title.title[0]?.plain_text ||
    "쑥 데브 블로그 컨텐츠 타이틀";
  const desc =
    metaData?.properties.desc.rich_text[0]?.plain_text ||
    "쑥 데브 블로그 컨텐츠 설명";

  return {
    title,
    description: desc,
    openGraph: {
      title, // OG 메타 태그 제목
      description: desc, // OG 메타 태그 설명
    },
    twitter: {
      title, // Twitter 카드 제목
      description: desc, // Twitter 카드 설명
    },
  };
}
