import {
  getNotionContent,
  notionClient,
  getNotionData,
} from "@/src/utils/notion.js";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";
import Post from "@/src/components/Posts";

const PostPage = async ({ params }) => {
  const post = await getNotionData(params.slug);
  //console.log("NNN POST", params);
  if (!post) notFound();
  const content = await getNotionContent(post[0].id);

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...content);

  return (
    <div>
      <Post
        title={post[0].properties.title.title[0].plain_text || ""}
        badge={post[0].properties.tag.multi_select[0]}
        date={post[0].properties.date.date}
        content={html}
      />
    </div>
  );
};

export default PostPage;
