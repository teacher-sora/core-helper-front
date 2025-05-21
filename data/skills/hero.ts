import { SkillData } from "@/types/job.types";

export const hero: SkillData[] = [
  {
    name: "브랜디쉬",
    skill: "brandish",
    image: {
      src: require("@/public/skills/hero/brandish.png"),
      alt: "브랜디쉬"
    }
  },
  {
    name: "플래시 슬래시",
    skill: "flash-slash",
    image: {
      src: require("@/public/skills/hero/flash-slash.png"),
      alt: "플래시 슬래시"
    }
  },
  {
    name: "파이널 어택",
    skill: "final-attack",
    isEssential: true,
    image: {
      src: require("@/public/skills/hero/final-attack.png"),
      alt: "파이널 어택"
    }
  },
  {
    name: "브레이브 슬래시",
    skill: "brave-slash",
    image: {
      src: require("@/public/skills/hero/brave-slash.png"),
      alt: "브레이브 슬래시"
    }
  },
  {
    name: "리프 어택",
    skill: "leaf-attack",
    image: {
      src: require("@/public/skills/hero/leaf-attack.png"),
      alt: "리프 어택"
    }
  },
  {
    name: "오라 블레이드",
    skill: "aura-blade",
    isEssential: true,
    image: {
      src: require("@/public/skills/hero/aura-blade.png"),
      alt: "오라 블레이드"
    }
  },
  {
    name: "레이징 블로우",
    skill: "raging-blow",
    isEssential: true,
    image: {
      src: require("@/public/skills/hero/raging-blow.png"),
      alt: "레이징 블로우"
    }
  },
  {
    name: "인사이징",
    skill: "incising",
    isEssential: true,
    image: {
      src: require("@/public/skills/hero/incising.png"),
      alt: "인사이징"
    }
  },
  {
    name: "레이지 업라이징",
    skill: "rage-uprising",
    isEssential: true,
    image: {
      src: require("@/public/skills/hero/rage-uprising.png"),
      alt: "레이지 업라이징"
    }
  },
  {
    name: "발할라",
    skill: "valhalla",
    isEssential: true,
    image: {
      src: require("@/public/skills/hero/valhalla.png"),
      alt: "발할라"
    }
  }
];