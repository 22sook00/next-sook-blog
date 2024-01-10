import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturePosts";
import RecentPosts from "@/src/components/Home/RecentPosts";
import { TOKEN, DATABASE_ID, VERSION } from "@/src/config";
import { notionClient, getPages } from "@/src/utils/notion.js";
import { NotionRenderer } from "@notion-render/client";
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import "react-ts-sook-ui/dist/style.css";
import Link from "next/link";
import Image from "next/image";

const Home = async () => {
  const allBlogs = await getPages();

  return (
    <main className="default-layout gap-28 flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs.results} />
      <FeaturedPosts blogs={allBlogs.results} />
      <RecentPosts blogs={allBlogs.results} />
    </main>
  );
};

export default Home;
