import React from "react";
import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";
import Experience from "@/src/components/About/Experience";
import Projects from "@/src/components/About/Projects";

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

const AboutPage = () => {
  return (
    <div className="mt-24 flex-col-center gap-28">
      <AboutCoverSection />

      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default AboutPage;
