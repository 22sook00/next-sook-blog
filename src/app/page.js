import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturePosts";
import RecentPosts from "@/src/components/Home/RecentPosts";
import { getPages } from "@/src/utils/notion.js";
import "react-ts-sook-ui/dist/style.css";

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
