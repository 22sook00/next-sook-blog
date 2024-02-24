import Script from "next/script";
import { Inter, Manrope, Rubik } from "next/font/google";
import "./globals.css";
import "./notion.css";
import "./prism-theme.css";
import { cx } from "@/src/utils";
import { siteMetadata } from "@/src/utils/siteMetaData.js";

import Header from "@/src/components/Header";
import Footer from "../components/Footer";

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
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
  ],
  //https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "ko_KR",
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
    <html lang="en">
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
        className={cx(
          //rubik.variable,
          inter.variable,
          "font-mr bg-light dark:bg-dark text-default"
        )}
      >
        {/*https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection*/}
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
