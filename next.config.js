/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: [
    //  "www.notion.so",
    //  "images.unsplash.com",
    //  "https://images.unsplash.com",
    //  "s3.us-west-2.amazonaws.com",
    //  "next-sookdev.s3.us-east-2.amazonaws.com",
    //],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "next-sookdev.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compiler: {
    removeConsole:
      process.env.NEXT_PUBLIC_API_URL === "https://next-sookdev.vercel.app",
  },
  i18n: {
    locales: ["en-US", "ko", "ja", "zh-CN", "zh-TW"],
    defaultLocale: "ko", // 기본 언어 설정
  },
};

module.exports = nextConfig;
