import InsightRoll from "@/src/components/About/InsightRoll";
import React from "react";

const insights = [
  "무슨내용을 넣으면 좋을까",
  "흠",
  "💜💕💙💜💕💙💜💕💙💜💕💙💜💕💙",
];

const AboutLayout = ({ children }) => {
  return (
    <main className="default-layout w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
};

export default AboutLayout;
