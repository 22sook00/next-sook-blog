"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-ts-sook-ui";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [type, setType] = useState("");
  const onSubmit = (data) => {
    //type !== "" && console.log("data", data);
    if (type !== "") return false;
    const sendingData = {
      ...data,
      reason: type,
    };

    console.log("sendingData", sendingData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full
      border border-line rounded p-4
      font-medium leading-relaxed font-in flex  flex-col gap-2"
    >
      <h5>안녕하세요</h5>
      <div className="flex-row-center justify-start gap-2">
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
      <div className="flex-row-center justify-start  gap-2">
        <button
          type="button"
          onClick={() =>
            setType((prev) => (prev === "sideProject" ? "" : "sideProject"))
          }
          className={`${
            type === "sideProject"
              ? "bg-accent text-white"
              : "bg-white text-accentDark"
          } text-sm rounded  h-[34px] px-3 border border-accent`}
        >
          사이드 프로젝트를 진행하고
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
          } text-sm rounded  h-[34px] px-3 border border-accent`}
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
          } text-sm rounded h-[34px] px-3 border border-accent`}
        >
          일하고
        </button>{" "}
        <p>하고 싶어 연락드립니다.</p>
      </div>
      <div>관심 있으시면 아래 메일로 회신 부탁드립니다. 감사합니다.</div>
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
        메일 보내기
      </button>
    </form>
  );
}
