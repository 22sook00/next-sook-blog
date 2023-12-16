import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import { CATEGORY_OBJ } from "@/src/utils/categoryData";
import GithubSlugger, { slug } from "github-slugger";

import "react-ts-sook-ui/dist/style.css";

const slugger = new GithubSlugger();

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  const count = allBlogs.map((el) => el.tags);
  const categoryCounts = {};
  count.forEach((category) => {
    category.forEach((subCategory) => {
      categoryCounts[subCategory] = (categoryCounts[subCategory] || 0) + 1;
    });
  });

  return (
    <article className="default-layout">
      <div className="w-full flex-col-center items-start mt-24">
        <h1 className="title uppercase"># {params.slug}</h1>

        {/*<span className="uppercase">{CATEGORY_OBJ[params.slug]?.ko}</span>*/}
        <div className="flex gap-2">
          {CATEGORY_OBJ[params.slug]?.type.slice(1).map((stack, idx) => {
            //return <Badge key={`${stack}-${idx}`} text={stack} size="sm" />;
            return (
              <span
                className="capitalize text-xs bg-accentLight/50 text-accentDark px-2 py-[2px] rounded-md"
                key={`${stack}-${idx}`}
              >
                {stack}
              </span>
            );
          })}
        </div>
      </div>
      <Categories
        categories={{ all: allBlogs.length, ...categoryCounts }}
        currentSlug={params.slug}
      />

      <div className="grid grid-cols-3 gap-8 min-h-[400px] mt-6">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "frontend developer" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}
