import { TOKEN, DATABASE_ID, VERSION } from "@/src/config/index.js";
import { NotionAPI } from "notion-client";

import { Client } from "@notionhq/client";
import { cache } from "react";

export const notionClient = new Client({
  auth: TOKEN,
});

export const notion = new NotionAPI({
  activeUser: process.env.NOTION_ACTIVE_USER,
  authToken: process.env.NOTION_TOKEN_V2,
});

export const getPages = () => {
  return notionClient.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "status",
      status: {
        equals: "published",
      },
    },
    sorts: [
      {
        property: "date",
        direction: "descending",
      },
    ],
  });
};

export const getPageContent = cache((pageId) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results);
});

export const getPageBySlug = cache((slug) => {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
    })
    .then((res) => res.results[0]);
});

//!전체 노션 데이터 가져오기
export const getNotionData = async (slug) => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": `${VERSION}`,
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
      filter: {
        property: "status",
        status: {
          equals: "published",
        },
      },
      sorts: [
        {
          property: "date",
          direction: "descending",
        },
      ],
      ...(slug && {
        filter: {
          property: "slug",
          rich_text: {
            equals: slug,
          },
        },
      }),
    }),
    next: { revalidate: 60 },
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const notionData = await res.json();
  return notionData.results;
};

//!노션 컨텐츠에 대한 정보 데이터
export const getNotionPageById = async (id) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Notion-Version": `${VERSION}`,
      Authorization: `Bearer ${TOKEN}`,
    },
    next: { revalidate: 60 },
  };

  const res = await fetch(`https://api.notion.com/v1/pages/${id}`, options);

  if (!res.ok) {
    throw new Error(`Failed to fetch Notion page with id: ${id}`);
  }

  const notionData = await res.json();
  return notionData;
};

export const getNotionContent = async (blockId) => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Notion-Version": `${VERSION}`,
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const contentRes = await fetch(
    `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100`,
    options
  );
  const notionContent = await contentRes.json();
  return notionContent.results;
};
