import { getPlaiceholder } from "plaiceholder";

export const getBase64 = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { base64, img } = await getPlaiceholder(buffer, { size: 10 });

  console.log("IMG", base64, img);
  return { base64, img };
};
