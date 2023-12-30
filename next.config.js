/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: {
    reactStrictMode: false,
    removeConsole: process.env.NODE_ENV === "production",
    images: {
      domains: [
        "www.notion.so",
        "images.unsplash.com",
        "s3.us-west-2.amazonaws.com",
        "prod-files-secure.s3.us-west-2.amazonaws.com",
        "example.com",
        "another-domain.com",
      ],
    },
  },
};

module.exports = withContentlayer({ ...nextConfig });
