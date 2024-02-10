import InsightRoll from "@/src/components/About/InsightRoll";
import React from "react";

const insights = ["✨ feel free to contact ", " 💫 looking forward to contact"];

const AboutLayout = ({ children }) => {
  return (
    <main className="default-layout w-full flex flex-col items-center justify-between">
      {/*<InsightRoll insights={insights} />*/}
      {children}
    </main>
  );
};

export default AboutLayout;
