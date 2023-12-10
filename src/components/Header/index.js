"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  SearchIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import { Dialog } from "react-ts-sook-ui";

const Header = () => {
  console.log(`
  ███████╗ ██████╗  ██████╗ ██╗  ██╗
  ██╔════╝██╔═══██╗██╔═══██╗██║ ██╔╝
  ███████╗██║   ██║██║   ██║█████╔╝ 
  ╚════██║██║   ██║██║   ██║██╔═██╗ 
  ███████║╚██████╔╝╚██████╔╝██║  ██╗
  ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝
  `);

  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <>
      <header className="default-layout py-4">
        <Logo />
        <button
          className="inline-block sm:hidden z-50"
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
        <nav
          className=" w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300 bg-red-700
        "
          style={{
            top: click ? "1rem" : "-5rem",
          }}
        >
          <Link href="/about" className="mx-2">
            Aboutasfd
          </Link>
          <Link href="/contact" className="mx-2">
            Contactddd
          </Link>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-dark text-light" : "bg-light text-default"
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

        <nav className=" xs:hidden sm:flex items-center">
          <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
            {/*<SearchIcon />*/}
            🔍
          </div>
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
              mode === "light" ? "bg-dark text-light" : "bg-light text-default"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <MoonIcon className={"fill-dark"} />
            ) : (
              <SunIcon className={"fill-dark"} />
            )}
          </button>
          <a
            href={siteMetadata.github}
            className="inline-block w-6 h-6 mr-4"
            aria-label="Check my profile on Github"
            target="_blank"
          >
            <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
          </a>
        </nav>
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
