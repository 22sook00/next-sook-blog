/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    reactStrictMode: true,
    images: {
      domains: [
        "www.notion.so",
        "images.unsplash.com",
        "https://images.unsplash.com",
        "s3.us-west-2.amazonaws.com",
      ],
      format: ["image/png", "image/webp", "image/jpeg"],
    },
  },
};

module.exports = nextConfig;
