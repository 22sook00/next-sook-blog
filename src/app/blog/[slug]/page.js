import {
  getNotionContent,
  //notionClient,
  getNotionData,
} from "@/src/utils/notion.js";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import Post from "@/src/components/Posts";

export default async function Page({ params }) {
  //const post = await getPageBySlug(params.slug);
  const post = await getNotionData(params.slug);
  if (!post) notFound();
  const content = await getNotionContent(post[0].id);
  console.log("content", content);
  //const notionRenderer = new NotionRenderer({
  //  client: notionClient,
  //});

  //notionRenderer.use(hljsPlugin({}));
  //notionRenderer.use(bookmarkPlugin(undefined));
  //const html = await notionRenderer.render(...content);

  return (
    //<Post
    //  title={post.properties.title.title[0].plain_text}
    //  content={html}
    //  badge={post.properties.tag.multi_select[0]}
    //  date={post.properties.date.date}
    ///>
    <div></div>
  );
}
