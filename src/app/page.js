import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturePosts";
import RecentPosts from "@/src/components/Home/RecentPosts";

import "react-ts-sook-ui/dist/style.css";
import { getNotionData } from "@/src/utils/notion.js";

const Home = async () => {
  const allBlogs = await getNotionData();

  return (
    <main className="default-layout gap-12 md:gap-28 flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
};

export default Home;
