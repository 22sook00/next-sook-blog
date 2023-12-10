import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturePosts";
import RecentPosts from "@/src/components/Home/RecentPosts";

import "react-ts-sook-ui/dist/style.css";

export default function Home() {
  return (
    <main className="default-layout  flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      {/*<FeaturedPosts blogs={allBlogs} />*/}
      <div>카테고리 Sticky</div>
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
