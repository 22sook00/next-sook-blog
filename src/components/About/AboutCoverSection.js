import Image from "next/image";
import React from "react";
import profileCharacter from "../../../public/character.png";
//import { getWorkingDate } from "@/src/utils/dateData.js";

const AboutCoverSection = () => {
  return (
    <>
      <section className="w-full flex  justify-start items-start gap-4 text-default dark:text-light">
        <Image
          src={profileCharacter}
          alt="22SOOK00"
          className="w-[250px] h-[250px] object-cover object-center border-2 border-grayLight shadow-lg rounded-lg"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
        <div className=" w-1/2 flex flex-col text-left items-start justify-center px-5 ">
          <h2 className="text-lg  mb-3">프론트엔드 개발자,</h2>
          <div className="flex items-end gap-2">
            <h3 className="title">이숙영 </h3>
            <h2 className="title"> 입니다.</h2>
          </div>
          <ul className="text-sm text-grayDark">
            <li>💻 신기술 사용에 적극적입니다.</li>
            <li>🎨 예쁘고(UI) 편리한것(UX)을 좋아합니다.</li>
            <li>🛠 빠른 유저경험을 위한 성능개선 공부를 하고 있습니다.</li>
            <li>💬 네트워킹 / 테크스터디 참여를 좋아합니다. </li>
            <li>🏃🏻‍♀️ 오랜 개발생활 유지를 위해 체력을 기르고 있습니다.</li>
            {/*<li>효율적인것을 좋아합니다.</li>
          <li>예쁜것 좋아하구요 해외사이트 많이 돌아다녀 봅니다.</li>*/}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutCoverSection;
