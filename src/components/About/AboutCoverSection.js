import Image from "next/image";
import React from "react";

const PROFILE_IMG =
  "https://next-sookdev.s3.us-east-2.amazonaws.com/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA+2022-11-05+%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE+8.34.58.png";
const AboutCoverSection = () => {
  return (
    <>
      <section className="w-full  gap-8 text-default dark:text-light">
        <h2 className="title mb-4 md:mb-6">Introduce</h2>
        <div className="flex gap-6 md:flex-row flex-col items-center md:gap-8 ">
          <Image
            src={PROFILE_IMG}
            alt="profile-img"
            className="w-full md:w-[250px] h-[250px] object-cover object-center rounded-lg"
            priority
            width={250}
            height={250}
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            placeholder="blur"
            blurDataURL={PROFILE_IMG}
          />
          <section className="w-full">
            <p className="text-xl mb-2 text-grayDark">프론트엔드 개발자,</p>
            <p className="title">이숙영 입니다.</p>
            <ul className="text-sm text-grayDark flex flex-col gap-[6px] dark:text-white ">
              <li>🎨 예쁘고(UI) 편리한것(UX)을 좋아합니다.</li>
              <li>💻 효율적인 개발자 경험(DX) 을 위한 공부를 합니다.</li>
              <li>🛠 빠른 유저경험을 위한 성능개선에 대해 고민합니다.</li>
              <li>💬 네트워킹 참여를 좋아합니다. </li>
              <li>🏃🏻‍♀️ 오랜 개발생활을 유지하기 위해 체력을 기르고 있습니다.</li>
              {/*<li>효율적인것을 좋아합니다.</li>
          <li>예쁜것 좋아하구요 해외사이트 많이 돌아다녀 봅니다.</li>*/}
            </ul>
          </section>
        </div>
      </section>
    </>
  );
};

export default AboutCoverSection;
