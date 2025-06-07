import { SkillData } from "@/types/job.types";

export const len: SkillData[] = [
  {
    name: "매화검 본초: 참",
    skill: "cka",
    image: {
      src: require("@/public/skills/len/cka.png"),
      alt: "cka",
    }
  },
  {
    name: "매화검 본초: 자",
    skill: "wk",
    isOptional: true,
    image: {
      src: require("@/public/skills/len/wk.png"),
      alt: "wk",
    }
  },
  {
    name: "망혼검 본초: 영격",
    skill: "dudrur",
    isEssential: true,
    image: {
      src: require("@/public/skills/len/dudrur.png"),
      alt: "dudrur",
    }
  },
  {
    name: "매화검 본초: 천",
    skill: "cjs",
    image: {
      src: require("@/public/skills/len/cjs.png"),
      alt: "cjs",
    }
  },
  {
    name: "매화검 본초: 쇄매",
    skill: "thoao",
    isEssential: true,
    image: {
      src: require("@/public/skills/len/thoao.png"),
      alt: "thoao",
    }
  },
  {
    name: "망혼검 절기: 열지",
    skill: "dufwl",
    isEssential: true,
    image: {
      src: require("@/public/skills/len/dufwl.png"),
      alt: "dufwl",
    }
  },
  {
    name: "매화검 본초: 선참",
    skill: "tjscka",
    isEssential: true,
    image: {
      src: require("@/public/skills/len/tjscka.png"),
      alt: "tjscka",
    }
  },
  {
    name: "매화검 본초: 예인",
    skill: "dPdls",
    isEssential: true,
    image: {
      src: require("@/public/skills/len/dPdls.png"),
      alt: "dPdls",
    }
  }
];