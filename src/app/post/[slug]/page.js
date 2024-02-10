import { getPageBySlug, notion } from "@/src/utils/notion.js";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

import { NotionPage } from "@/src/components/notion";

const PostPage = async ({ params }) => {
  //const post = await getNotionData(params.slug);
  //if (!post) notFound();
  //const content = await getNotionContent(post[0].id);

  const post = await getPageBySlug(params.slug);
  const rootPageId = post.id;
  //const content = await getNotionContent(rootPageId);

  if (!post) notFound();
  const data = await notion.getPage(rootPageId);

  //const notionRenderer = new NotionRenderer({
  //  client: notionClient,
  //});

  //notionRenderer.use(hljsPlugin({}));
  //notionRenderer.use(bookmarkPlugin(undefined));
  //const html = await notionRenderer.render(...content);

  //console.log("html", html);

  return (
    <div>
      {/*<Post
        title={post.properties.title.title[0].plain_text || ""}
        badge={post.properties.tag.multi_select[0]}
        date={post.properties.date.date}
        content={html}
      />*/}
      <NotionPage recordMap={data} rootPageId={rootPageId} />
    </div>
  );
};

export default PostPage;
