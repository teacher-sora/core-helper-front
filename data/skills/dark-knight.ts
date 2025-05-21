import { SkillData } from "@/types/job.types";

export const darkKnight: SkillData[] = [
  {
    name: "파이널 어택",
    skill: "final-attack",
    isEssential: true,
    image: {
      src: require("@/public/skills/dark-knight/final-attack.png"),
      alt: "파이널 어택"
    }
  },
  {
    name: "스피어 풀링",
    skill: "spear-pulling",
    image: {
      src: require("@/public/skills/dark-knight/spear-pulling.png"),
      alt: "스피어 풀링"
    }
  },
  {
    name: "비홀더",
    skill: "beholder",
    isEssential: true,
    image: {
      src: require("@/public/skills/dark-knight/beholder.png"),
      alt: "비홀더"
    }
  },
  {
    name: "라만차 스피어",
    skill: "la-mancha-spear",
    image: {
      src: require("@/public/skills/dark-knight/la-mancha-spear.png"),
      alt: "라만차 스피어"
    }
  },
  {
    name: "리프 어택",
    skill: "leaf-attack",
    isOptional: true,
    image: {
      src: require("@/public/skills/dark-knight/leaf-attack.png"),
      alt: "리프 어택"
    }
  },
  {
    name: "궁니르 디센트",
    skill: "gungnir-descent",
    isEssential: true,
    image: {
      src: require("@/public/skills/dark-knight/gungnir-descent.png"),
      alt: "궁니르 디센트"
    }
  },
  {
    name: "다크 임페일",
    skill: "dark-impale",
    isEssential: true,
    image: {
      src: require("@/public/skills/dark-knight/dark-impale.png"),
      alt: "다크 임페일"
    }
  },
  {
    name: "다크 신서시스",
    skill: "dark-synthesis",
    isEssential: true,
    image: {
      src: require("@/public/skills/dark-knight/dark-synthesis.png"),
      alt: "다크 신서시스"
    }
  }
];