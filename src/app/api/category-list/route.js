import { getNotionData } from "@/src/utils/notion";

export async function POST(req) {
  try {
    const notionData = await getNotionData(); // Notion에서 데이터 가져오기
    if (!notionData) {
      return new Response(JSON.stringify({ error: "No data found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ data: notionData }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
