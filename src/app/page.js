import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
import FeaturedPosts from "@/src/components/Home/FeaturePosts";
import RecentPosts from "@/src/components/Home/RecentPosts";
import { TOKEN, DATABASE_ID, VERSION } from "@/src/config";

import "react-ts-sook-ui/dist/style.css";
import Link from "next/link";
import Image from "next/image";

const Home = async () => {
  //next.js app router axios 가 아닌, fetch 권장.
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": VERSION,
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "날짜",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  console.log(
    "PRO",
    projects.results.map((el) => el.properties["이름"].title[0].plain_text)
  );

  return (
    <main className="default-layout gap-28 flex flex-col items-center justify-center">
      <div className="border p-4 rounded-md shadow-sm">
        {projects.results.map((posting) => {
          const name = posting.properties["이름"].title[0].plain_text;
          const githubUrl = posting.properties["Git"].url;
          const desc = posting.properties["설명"].rich_text[0].plain_text;
          const tags = posting.properties["태그"].multi_select;
          const postingDate = posting.properties["날짜"].date.start;
          const imgSrc = posting.cover.file?.url || posting.cover.external?.url;
          return (
            <div key={posting.id}>
              <h1>{name}</h1>
              <p>{desc}</p>
              {/*<Image
                src={imgSrc}
                alt="22SOOK00"
                width={100}
                height={100}
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
              />*/}
              <Link href={githubUrl}>깃허브링크</Link>
              <p>{postingDate}</p>
              <div>
                {tags.map((tag, idx) => {
                  return <p key={idx}>{tag.name}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
};

export default Home;
