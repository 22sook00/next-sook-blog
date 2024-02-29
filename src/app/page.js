import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturePosts";
import RecentPosts from "@/src/components/Home/RecentPosts";
import { getNotionData, getPages } from "@/src/utils/notion.js";
import "react-ts-sook-ui/dist/style.css";

const Home = async () => {
  const data = await getPages();
  const allBlogs = data.results;
  return (
    <main className="default-layout gap-28 flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
};

export default Home;
