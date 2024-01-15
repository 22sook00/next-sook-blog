import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturePosts";
import RecentPosts from "@/src/components/Home/RecentPosts";
import { getNotionData, getPages } from "@/src/utils/notion.js";
import "react-ts-sook-ui/dist/style.css";

//import { notion } from "@/src/utils/notion.js";

////https://www.notion.so/intersection-observer-5792c5e22d21476f99667344f470258e?pvs=4
//const rootPageId = "5792c5e22d21476f99667344f470258e"; // add your root page id

//async function getData(rootPageId) {
//  return await notion.getPage(rootPageId);
//}
const Home = async () => {
  //const allBlogs = await getNotionData();
  const data = await getPages();
  const allBlogs = data.results;
  //console.log("all", allBlogs.length);
  //console.log("dat", allBlogs.results[0]);
  return (
    <main className="default-layout gap-28 flex flex-col items-center justify-center">
      {/*<HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />*/}
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
};

export default Home;
