// notion 클라이언트 사용하는 함수 임포트

import { getPageBySlug } from "@/src/utils/notion";

export async function GET(req, res) {
  const url = new URL(req.url);
  const keyword = url.searchParams.get("keyword"); // ?keyword=somevalue 형태의 쿼리 파라미터를 받음

  try {
    const page = await getPageBySlug(keyword);
    if (!page) {
      return new Response(JSON.stringify({ get: 1212 }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(page), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
