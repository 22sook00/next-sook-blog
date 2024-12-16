import Script from "next/script";
import localFont from "next/font/local";

import "./globals.css";
import "./notion.css";
import { cx } from "@/src/utils";
import { siteMetadata } from "@/src/utils/siteMetaData.js";

import Header from "@/src/components/Header";
import Footer from "../components/Footer";
import ReactQueryProvider from "@/src/provider/ReactQueryProvider";

const pretendard = localFont({
  src: [
    {
      path: "../../public/asset/Pretendard-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/asset/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/asset/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/asset/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/asset/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  subsets: ["sans-serif"],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  keywords: [
    "블로그",
    "개발블로그",
    "쑥데브",
    "프론트엔드",
    "프론트엔드개발자",
    "프론트엔드개발블로그",
    "Next.js",
    "tailwindcss",
    "SookDev",
    "next-sook",
    "next-sookdev",
  ],
  //https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "ko",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE}
        />
        <meta
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_SEARCH_ADVISOR}
        />
      </head>
      <body
        lang="ko"
        className={cx(
          pretendard.variable,
          "font-pretendard bg-light dark:bg-dark text-default"
        )}
      >
        {/*https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection*/}
        <Script id="theme-switcher" strategy="beforeInteractive"></Script>
        <Header />
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Footer />
      </body>
    </html>
  );
}
