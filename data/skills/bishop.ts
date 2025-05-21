import { SkillData } from "@/types/job.types";

export const bishop: SkillData[] = [
  {
    name: "힐",
    skill: "heal",
    isEssential: true,
    image: {
      src: require("@/public/skills/bishop/heal.png"),
      alt: "heal"
    }
  },
  {
    name: "홀리 애로우",
    skill: "holy-arrow",
    image: {
      src: require("@/public/skills/bishop/holy-arrow.png"),
      alt: "holy-arrow"
    }
  },
  {
    name: "샤이닝 레이",
    skill: "shining-ray",
    image: {
      src: require("@/public/skills/bishop/shining-ray.png"),
      alt: "shining-ray"
    }
  },
  {
    name: "빅뱅",
    skill: "big-bang",
    isEssential: true,
    image: {
      src: require("@/public/skills/bishop/big-bang.png"),
      alt: "big-bang"
    }
  },
  {
    name: "바하뮤트",
    skill: "bahamut",
    isEssential: true,
    image: {
      src: require("@/public/skills/bishop/bahamut.png"),
      alt: "bahamut"
    }
  },
  {
    name: "엔젤레이",
    skill: "angel-ray",
    isEssential: true,
    image: {
      src: require("@/public/skills/bishop/angel-ray.png"),
      alt: "angel-ray"
    }
  },
  {
    name: "제네시스",
    skill: "genesis",
    isEssential: true,
    image: {
      src: require("@/public/skills/bishop/genesis.png"),
      alt: "genesis"
    }
  },
  {
    name: "헤븐즈 도어",
    skill: "heavens-door",
    isEssential: true,
    image: {
      src: require("@/public/skills/bishop/heavens-door.png"),
      alt: "heavens-door"
    }
  }
];
