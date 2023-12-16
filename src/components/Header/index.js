"use client";
import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import { Dialog } from "react-ts-sook-ui";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <>
      <header
        className="py-4 sticky top-0 left-0
       right-0 z-50 w-full backdrop-blur flex-none transition-colors duration-500 border-b 
       border-slate-900/10   bg-white/80 dark:bg-dark"
      >
        <div className="default-layout flex-row justify-between">
          <Logo />
          <button
            className="inline-block sm:hidden z-30"
            onClick={toggle}
            aria-label="Hamburger Menu"
          >
            <div className="w-6 cursor-pointer transition-all ease duration-300">
              <div className="relative">
                <span
                  className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                  style={{
                    transform: click
                      ? "rotate(-45deg) translateY(0)"
                      : "rotate(0deg) translateY(6px)",
                  }}
                >
                  &nbsp;
                </span>
                <span
                  className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                  style={{
                    opacity: click ? 0 : 1,
                  }}
                >
                  &nbsp;
                </span>
                <span
                  className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
                  style={{
                    transform: click
                      ? "rotate(45deg) translateY(0)"
                      : "rotate(0deg) translateY(-6px)",
                  }}
                >
                  &nbsp;
                </span>
              </div>
            </div>
          </button>
          {/*모바일 NAV, TODO : Drawer 로 변경해보기 */}

          <nav className="xs:hidden sm:flex items-center gap-4">
            <Link href="/categories/all" className="mx-2">
              Category
            </Link>
            <Link href="/about" className="mx-2">
              About
            </Link>
            <Link href="/contact" className="mx-2">
              Contact
            </Link>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={cx(
                "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
                mode === "light"
                  ? "bg-dark text-light"
                  : "bg-light text-default"
              )}
              aria-label="theme-switcher"
            >
              {mode === "light" ? (
                <MoonIcon className={"fill-dark"} />
              ) : (
                <SunIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      </header>
      {isOpen && (
        <Dialog isFixedButton={false} handleClosePopup={() => setIsOpen(false)}>
          <h1 className="font-bold text-3xl">Search Post Keyword</h1>
        </Dialog>
      )}
    </>
  );
};

export default Header;
