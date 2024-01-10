/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: {
    reactStrictMode: false,
    //removeConsole: process.env.NODE_ENV === "production",
    images: {
      domains: [
        "www.notion.so",
        "https://images.unsplash.com",
        "s3.us-west-2.amazonaws.com",
      ],
    },
  },
};

module.exports = withContentlayer({ ...nextConfig });
