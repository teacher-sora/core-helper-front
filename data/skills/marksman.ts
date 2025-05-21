import { SkillData } from "@/types/job.types";

export const marksman: SkillData[] = [
  {
    name: "애로우 블로우",
    skill: "arrow-blow",
    image: {
      src: require("@/public/skills/marksman/arrow-blow.png"),
      alt: "arrow-blow",
    },
  },
  {
    name: "리트리트 샷",
    skill: "retreat-shot",
    isOptional: true,
    image: {
      src: require("@/public/skills/marksman/retreat-shot.png"),
      alt: "retreat-shot",
    },
  },
  {
    name: "파이널 어택 : 석궁",
    skill: "final-attack-crossbow",
    isEssential: true,
    image: {
      src: require("@/public/skills/marksman/final-attack-crossbow.png"),
      alt: "final-attack-crossbow",
    },
  },
  {
    name: "볼트 스위프트",
    skill: "bolt-swift",
    isEssential: true,
    image: {
      src: require("@/public/skills/marksman/bolt-swift.png"),
      alt: "bolt-swift",
    },
  },
  {
    name: "피어싱",
    skill: "piercing",
    isEssential: true,
    image: {
      src: require("@/public/skills/marksman/piercing.png"),
      alt: "piercing",
    },
  },
  {
    name: "스나이핑",
    skill: "sniping",
    isEssential: true,
    image: {
      src: require("@/public/skills/marksman/sniping.png"),
      alt: "sniping",
    },
  },
  {
    name: "롱 레인지 트루샷",
    skill: "long-range-trueshot",
    isEssential: true,
    image: {
      src: require("@/public/skills/marksman/long-range-trueshot.png"),
      alt: "long-range-trueshot",
    },
  },
];
