import "server-only";

import { Client } from "@notionhq/client";
import { cache } from "react";

export const notionClient = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_TOKEN,
});

//TODO pagination 로직 추가
export const getPages = cache(() => {
  return notionClient.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
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
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
      filter: {
        property: "slug",
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0]);
});
