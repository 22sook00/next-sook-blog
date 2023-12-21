import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-default dark:text-light">
      <div className=" w-10 h-10 rounded-full overflow-hidden shadow-md  mr-2">
        <Image
          src={profileImg}
          alt="22sook00 logo"
          className="w-full h-auto rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        SookDev
      </span>
    </Link>
  );
};

export default Logo;
