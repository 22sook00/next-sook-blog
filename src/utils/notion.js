import { TOKEN, DATABASE_ID, VERSION } from "@/src/config/index.js";

//import "server-only";

//import { Client } from "@notionhq/client";
//import { cache } from "react";

//export const notionClient = new Client({
//  auth: process.env.TOKEN,
//});

//export const getPages = cache(() => {
//  return notionClient.databases.query({
//    database_id: process.env.NOTION_DATABASE_ID,
//  });
//});

//export const getPageContent = cache((pageId) => {
//  return notionClient.blocks.children
//    .list({ block_id: pageId })
//    .then((res) => res.results);
//});

//export const getPageBySlug = cache((slug) => {
//  return notionClient.databases
//    .query({
//      database_id: process.env.NOTION_DATABASE_ID,
//      filter: {
//        property: "slug",
//        rich_text: {
//          equals: slug,
//        },
//      },
//    })
//    .then((res) => res.results[0]);
//});

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
  //console.log("RES:", notionData);
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
