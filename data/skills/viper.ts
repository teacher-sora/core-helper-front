import { SkillData } from "@/types/job.types";

export const viper: SkillData[] = [
  {
    name: "피스트 인레이지",
    skill: "fist-inrage",
    isEssential: true,
    image: {
      src: require("@/public/skills/viper/fist-inrage.png"),
      alt: "fist-inrage"
    }
  },
  {
    name: "씨 서펜트 인레이지",
    skill: "sea-serpent-inrage",
    isEssential: true,
    image: {
      src: require("@/public/skills/viper/sea-serpent-inrage.png"),
      alt: "sea-serpent-inrage"
    }
  },
  {
    name: "전함 노틸러스",
    skill: "naval-nautilus",
    isEssential: true,
    image: {
      src: require("@/public/skills/viper/naval-nautilus.png"),
      alt: "naval-nautilus"
    }
  },
  {
    name: "훅 봄버",
    skill: "hook-bomber",
    isEssential: true,
    image: {
      src: require("@/public/skills/viper/hook-bomber.png"),
      alt: "hook-bomber"
    }
  },
  {
    name: "씨 서펜트 버스트",
    skill: "sea-serpent-burst",
    isEssential: true,
    image: {
      src: require("@/public/skills/viper/sea-serpent-burst.png"),
      alt: "sea-serpent-burst"
    }
  },
  {
    name: "스크류 펀치",
    skill: "screw-punch",
    isOptional: true,
    image: {
      src: require("@/public/skills/viper/screw-punch.png"),
      alt: "screw-punch"
    }
  }
];
