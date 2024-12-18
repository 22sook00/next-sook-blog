import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className=" flex items-center text-default font-medium dark:text-light text-lg md:text-xl"
    >
      SookDev
    </Link>
  );
};

export default Logo;
