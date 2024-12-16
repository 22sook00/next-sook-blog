import Link from "next/link";
import { getNotionData } from "@/src/utils/notion.js";
import { convertBlogData } from "@/src/utils/convert";
import { THUMBNAIL_OBJ } from "@/src/utils/categoryData";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import CategoryList from "@/src/components/category/CategoryList";

const CategoryPage = async ({ params }) => {
  const allCategories = ["all"];
  const allPosts = await getNotionData();
  console.log("allPosts", allPosts);
  const blogs = allPosts.filter((blog) => {
    const tags = blog.properties.tag.multi_select;
    return tags.some((tag) => {
      const slugified = tag.name;
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }

      return slugified.toUpperCase() === params.slug.toUpperCase();
    });
  });

  return (
    <article className="default-layout">
      <div className="w-full flex-col-center items-start mt-24">
        <h1 className="title uppercase"># {params.slug}</h1>
      </div>

      <Categories allPosts={allPosts} />
      <CategoryList blogs={blogs} />
    </article>
  );
};

export default CategoryPage;

//export async function generateStaticParams() {
//  const categories = [];
//  const paths = [{ slug: "all" }];
//  const allPosts = await getPages();
//  allPosts.map((blog) => {
//    const tags = blog.properties.tag.multi_select;
//    tags.map((tag) => {
//      let slugified = slugger.slug(tag);
//      //let slugified = tag;
//      if (!categories.includes(slugified)) {
//        categories.push(slugified);
//        paths.push({ slug: slugified });
//      }
//    });
//  });

//  return paths;
//}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "frontend developer" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}