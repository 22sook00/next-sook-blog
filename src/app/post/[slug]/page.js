import {
  getNotionContent,
  notionClient,
  getNotionData,
  getPages,
  getPageContent,
  getPageBySlug,
  notion,
} from "@/src/utils/notion.js";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import Post from "@/src/components/Posts";
import { NotionPage } from "@/src/components/notion";

const PostPage = async ({ params }) => {
  //const post = await getNotionData(params.slug);
  //if (!post) notFound();
  //const content = await getNotionContent(post[0].id);

  //const notionRenderer = new NotionRenderer({
  //  client: notionClient,
  //});

  //notionRenderer.use(hljsPlugin({}));
  //notionRenderer.use(bookmarkPlugin(undefined));
  //const html = await notionRenderer.render(...content);

  const post = await getPageBySlug(params.slug);
  const rootPageId = post.id;
  //console.log("p", post);
  if (!post) notFound();
  const data = await notion.getPage(rootPageId);
  //const content = await getPageContent(post.id);

  return (
    <div>
      {/*<Post
        title={post[0].properties.title.title[0].plain_text || ""}
        badge={post[0].properties.tag.multi_select[0]}
        date={post[0].properties.date.date}
        content={html}
      />*/}
      <NotionPage recordMap={data} rootPageId={rootPageId} />
    </div>
  );
};

export default PostPage;
