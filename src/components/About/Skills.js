const SKILL_LIST = {
  "Language & Framework": ["next.js", "javaScript", "typescript"],
  Library: ["react", "react-query", "recoil", "redux-toolkit"],
  "Style&Animation": [
    "tailwind css",
    "emotion",
    "storybook",
    "scss",
    "three.js",
    "r3f",
  ],
  "DevOps & Tool": ["github-action", "AWS", "Vercel", "Jira", "Figma"],
};

const Skills = () => {
  const SKILL_ARR = Object.entries(SKILL_LIST);
  return (
    <section className="w-full">
      <h2 className="title ">skills</h2>
      <div className="grid grid-cols-4 gap-4">
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
