import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";
//import { getWorkingDate } from "@/src/utils/dateData.js";

const AboutCoverSection = () => {
  return (
    <>
      <section className="w-full sm:block md:flex  justify-start items-start gap-4 text-default dark:text-light">
        <div>
          <h2 className="title">Introduce</h2>
          <Image
            src={profileCharacter}
            alt="22SOOK00"
            className="sm:w-full md:w-[250px] h-[250px] object-cover object-center border-2 border-grayLight shadow-lg rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
          />
        </div>
        <div className="sm:w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 ">
          <h2 className="text-xl mt-10 md:mt-[70px] mb-3">
            프론트엔드 개발자,
          </h2>
          <div className="flex items-end gap-2">
            <h3 className="title">이숙영 </h3>
            <h2 className="title"> 입니다.</h2>
          </div>
          <ul className="text-sm text-grayDark flex flex-col gap-[6px] dark:text-white ">
            <li>🎨 예쁘고(UI) 편리한것(UX)을 좋아합니다.</li>
            <li>💻 효율적인 개발자 경험(DX) 을 위한 공부를 합니다.</li>
            <li>🛠 빠른 유저경험을 위한 성능개선에 대해 고민합니다.</li>
            <li>💬 네트워킹 참여를 좋아합니다. </li>
            <li>🏃🏻‍♀️ 오랜 개발생활을 유지하기 위해 체력을 기르고 있습니다.</li>
            {/*<li>효율적인것을 좋아합니다.</li>
          <li>예쁜것 좋아하구요 해외사이트 많이 돌아다녀 봅니다.</li>*/}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutCoverSection;
