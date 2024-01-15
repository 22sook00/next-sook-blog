import { TOKEN, DATABASE_ID, VERSION } from "@/src/config/index.js";
import { NotionAPI } from "notion-client";

import { Client } from "@notionhq/client";
import { cache } from "react";

export const notionClient = new Client({
  auth: TOKEN,
});

//console.log("NOTION_CLI::", notionClient);

export const getPages = cache(() => {
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
});

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

export const notion = new NotionAPI({
  activeUser: process.env.NOTION_ACTIVE_USER,
  authToken: process.env.NOTION_TOKEN_V2,
});

//export const notion = new NotionAPI();

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
  };
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const notionData = await res.json();
  return notionData.results;
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
