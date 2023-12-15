export const CATEGORY_OBJ = {
  all: { theme: "primary", ko: "전체", desc: "", type: ["all", "전체"] },
  cs: { theme: "warning", ko: "cs", desc: "", type: ["cs", "컴퓨터", "cli"] },
  javascript: {
    theme: "warning",
    ko: "자바스크립트",
    desc: "",
    type: ["javascript", "자바스크립트"],
  },
  framework: {
    theme: "progress",
    ko: "프레임워크",
    desc: "",
    type: ["framework", "프레임워크", "next.js", "넥스트"],
  },
  "state-management": {
    theme: "progress",
    ko: "상태관리",
    desc: "상태관리 툴 사용경험과 이론을 담은 글입니다.",
    type: [
      "state management",
      "상태관리",
      "recoil",
      "리코일",
      "react query",
      "리액트쿼리",
    ],
  },
  animation: {
    theme: "progress",
    ko: "애니메이션",
    desc: "CSS, 외부 라이브러리 등 애니메이션 구현 과정과 경험을 담은 글입니다.",
    type: ["animation", "애니메이션", "3d", "three.js", "r3f"],
  },
  typescript: {
    theme: "success",
    ko: "타입스크립트",
    desc: "타입스크립트 공부기록을 담은 글입니다.",
    type: ["typescript", "타입스크립트"],
  },
  "code-quality": {
    theme: "success",
    ko: "성능최적화",
    desc: "성능최적화 과정과 경험을 담은 글입니다.",
    type: ["code quality", "성능최적화"],
  },
  productivity: {
    theme: "success",
    ko: "생산성",
    desc: "업무에 도움이 되었던 툴 혹은 팁에 대한 글입니다.",
    type: ["productivity", "생산성"],
  },
  pwa: {
    theme: "warning",
    ko: "PWA",
    desc: "네이티브 앱 없이 데스크탑, 모바일 웹앱 경험을 담은 글입니다.",
    type: ["PWA", "progressive web app", "웹앱"],
  },
  server: { theme: "light", ko: "서버", type: ["server", "서버", "백엔드"] },
  "ci-cd": {
    theme: "light",
    ko: "CI/CD",
    desc: "배포, CI/CD 인프라에 관한 기록입니다.",
    type: ["CI/CD", "deploy", "배포", "github action", "깃허브액션"],
  },
  bug: {
    theme: "error",
    ko: "버그",
    desc: "에러를 해결한 과정과 경험을 담은 글입니다.",
    type: ["bug", "버그", "에러"],
  },
};
