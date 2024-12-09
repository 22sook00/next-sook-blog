const SKILL_LIST = {
  Language: ["javaScript", "typescript"],
  "SPA Framework": [
    "react",
    "next.js",
    "react-query",
    "recoil",
    "redux-toolkit",
  ],
  Style: ["tailwindcss", "styled-component", "emotion", "storybook", "scss"],
  ETC: [
    "github-action",
    "Vercel",
    "AWS",
    "Click-up",
    "Notion",
    "Jira",
    "Figma",
  ],
};

const Skills = () => {
  const SKILL_ARR = Object.entries(SKILL_LIST);
  return (
    <section className="w-full">
      <h2 className="title ">skills</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4">
        {SKILL_ARR.map((type) => {
          return (
            <ul
              key={`skill-${type[0]}`}
              className="flex flex-col justify-start gap-1 rounded-lg bg-grayLight p-4 "
            >
              <p className="text-base font-semibold mb-2">{type[0]}</p>
              {type[1].map((skill) => {
                return (
                  <li
                    key={`skill-name-${skill}`}
                    className="text-sm capitalize"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
