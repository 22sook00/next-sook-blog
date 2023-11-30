import Image from "next/image";
import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturePosts";
import RecentPosts from "@/src/components/Home/RecentPosts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
