/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    reactStrictMode: false,
    images: {
      domains: [
        "www.notion.so",
        "https://images.unsplash.com",
        "s3.us-west-2.amazonaws.com",
      ],
    },
  },
};

module.exports = nextConfig;
