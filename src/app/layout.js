import "./globals.css";
import { cx } from "@/src/utils";
import { Inter, Manrope, Rubik } from "next/font/google";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          rubik.variable,
          //manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
