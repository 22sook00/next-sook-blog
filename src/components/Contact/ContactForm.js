"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-ts-sook-ui";
import Spinner from "../Loader/Spinner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState("");

  //const onSubmit = (data) => {
  //  if (type !== "") return false;
  //  const sendingData = {
  //    ...data,
  //    reason: type,
  //  };

  //  sendEmail(sendingData);
  //};

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = async (data) => {
    setIsLoading(true);
    if (type === "") return false;
    const sendingData = {
      ...data,
      reason: type,
    };
    // send email
    const response = await fetch("api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(sendingData),
    });
    console.log("response", response);
    if (!response.ok) throw new Error("Email send failed");
    alert("💌 이메일이 성공적으로 발송 됐습니다.");
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="w-full
      border border-line rounded p-4
      font-medium leading-relaxed flex  flex-col gap-2"
    >
      <h5>안녕하세요</h5>
      <div className="md:flex-row-center justify-start gap-2">
        저는{" "}
        <input
          type="associate"
          placeholder="소속"
          maxLength={25}
          {...register("associate", {})}
          className="default-input"
        />
        의
        <input
          type="name"
          placeholder="이름"
          maxLength={10}
          {...register("name", {})}
          className="default-input"
        />
        입니다.
      </div>
      SookDev 블로그를 보고, 함께
      <div className="md:flex-row-center justify-start  gap-2">
        <button
          type="button"
          onClick={() =>
            setType((prev) => (prev === "sideProject" ? "" : "sideProject"))
          }
          className={`${
            type === "sideProject"
              ? "bg-accent text-white"
              : "bg-white text-accentDark"
          } mr-2 md:mr-0  text-sm rounded  h-[34px] px-3 border border-accent`}
        >
          사이드 프로젝트를 진행
        </button>
        <button
          type="button"
          onClick={() =>
            setType((prev) => (prev === "coffeeChat" ? "" : "coffeeChat"))
          }
          className={`${
            type === "coffeeChat"
              ? "bg-accent text-white"
              : "bg-white text-accentDark"
          } mr-2 md:mr-0 text-sm rounded  h-[34px] px-3 border border-accent`}
        >
          커피챗
        </button>
        <button
          type="button"
          onClick={() => setType((prev) => (prev === "work" ? "" : "work"))}
          className={`${
            type === "work"
              ? "bg-accent text-white"
              : "bg-white text-accentDark"
          } mr-2 md:mr-0 text-sm rounded h-[34px] px-3 border border-accent`}
        >
          일하고
        </button>{" "}
        <p>하고 싶어 연락드립니다.</p>
      </div>
      <div>관심 있으시면 아래 메일로 회신 부탁드립니다.</div>
      <div>감사합니다.</div>
      <input
        type="email"
        placeholder="email@email.com"
        maxLength={30}
        {...register("email", {})}
        className="default-input"
      />
      <textarea
        {...register("details", {})}
        placeholder="추가로 전달하고 싶은 내용이 있으시면 작성 해 주세요 🙌🏻"
        rows={5}
        className="
        default-input
        resize-none mt-4
         "
      />
      <button
        type="submit"
        disabled={type === "" ? true : false}
        className="
        bg-accent
        text-white
        mt-8 text-sm
        inline-block capitalize py-2 sm:py-3 px-6 sm:px-8  
        rounded cursor-pointer
        disabled:bg-grayLight
        disabled:text-gray
        "
      >
        {/*노드메일러 구축하기*/}
        {isLoading ? <Spinner /> : <>메일 보내기</>}
        {/*메일 보내기*/}
      </button>
    </form>
  );
}
