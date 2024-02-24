import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/logo.png";

const Logo = () => {
  return (
    <Link
      href="/"
      className="SookDev flex items-center text-default dark:text-light  text-lg md:text-xl"
    >
      <div className=" w-10 h-10 rounded-full overflow-hidden shadow-md  mr-2">
        <Image
          src={profileImg}
          alt="22sook00 logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      SookDev
    </Link>
  );
};

export default Logo;
