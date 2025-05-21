import { SkillData } from "@/types/job.types";

export const mihile: SkillData[] = [
  {
    name: "샤이닝 피어스",
    skill: "shining-pierce",
    image: {
      src: require("@/public/skills/mihile/shining-pierce.png"),
      alt: "shining-pierce"
    }
  },
  {
    name: "로얄 가드",
    skill: "royal-guard",
    isEssential: true,
    image: {
      src: require("@/public/skills/mihile/royal-guard.png"),
      alt: "로얄 가드"
    }
  },
  {
    name: "소울 어썰트",
    skill: "soul-assault",
    image: {
      src: require("@/public/skills/mihile/soul-assault.png"),
      alt: "소울 어썰트"
    }
  },
  {
    name: "샤이닝 체이스",
    skill: "shining-chase",
    isOptional: true,
    image: {
      src: require("@/public/skills/mihile/shining-chase.png"),
      alt: "샤이닝 체이스"
    }
  },
  {
    name: "파이널 어택",
    skill: "final-attack",
    isEssential: true,
    image: {
      src: require("@/public/skills/mihile/final-attack.png"),
      alt: "파이널 어택"
    }
  },
  {
    name: "소울 릴리즈",
    skill: "soul-release",
    image: {
      src: require("@/public/skills/mihile/soul-release.png"),
      alt: "소울 릴리즈"
    }
  },
  {
    name: "샤이닝 크로스",
    skill: "shining-cross",
    isEssential: true,
    image: {
      src: require("@/public/skills/mihile/shining-cross.png"),
      alt: "샤이닝 크로스"
    }
  },
  {
    name: "인스톨 실드",
    skill: "install-shield",
    isEssential: true,
    image: {
      src: require("@/public/skills/mihile/install-shield.png"),
      alt: "인스톨 실드"
    }
  },
  {
    name: "데들리 차지",
    skill: "deadly-charge",
    isEssential: true,
    image: {
      src: require("@/public/skills/mihile/deadly-charge.png"),
      alt: "데들리 차지"
    }
  }
];