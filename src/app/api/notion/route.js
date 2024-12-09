import { NotionAPI } from "notion-client";

export async function GET(req, res) {
  const url = new URL(req.url);
  const key = url.searchParams.get("key"); // ?keyword=somevalue 형태의 쿼리 파라미터를 받음

  try {
    const notion = await new NotionAPI({
      activeUser: process.env.NOTION_ACTIVE_USER,
      authToken: process.env.NOTION_TOKEN_V2,
    }).getPage(key);

    if (!notion) {
      return new Response(JSON.stringify({ get: "notion error" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(notion), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
