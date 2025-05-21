import { SkillData } from "@/types/job.types";

export const mercedes: SkillData[] = [
  {
    name: "스피드 듀얼샷",
    skill: "speed-dualshot",
    image: {
      src: require("@/public/skills/mercedes/speed-dualshot.png"),
      alt: "speed-dualshot",
    },
  },
  {
    name: "차지 드라이브",
    skill: "charge-drive",
    isOptional: true,
    image: {
      src: require("@/public/skills/mercedes/charge-drive.png"),
      alt: "charge-drive",
    },
  },
  {
    name: "스트라이크 듀얼샷",
    skill: "strike-dualshot",
    isEssential: true,
    image: {
      src: require("@/public/skills/mercedes/strike-dualshot.png"),
      alt: "strike-dualshot",
    },
  },
  {
    name: "리프 토네이도",
    skill: "leaf-tornado",
    isEssential: true,
    image: {
      src: require("@/public/skills/mercedes/leaf-tornado.png"),
      alt: "leaf-tornado",
    },
  },
  {
    name: "유니콘 스파이크",
    skill: "unicorn-spike",
    isEssential: true,
    image: {
      src: require("@/public/skills/mercedes/unicorn-spike.png"),
      alt: "unicorn-spike",
    },
  },
  {
    name: "엘리멘탈 나이트",
    skill: "elemental-knight",
    isEssential: true,
    image: {
      src: require("@/public/skills/mercedes/elemental-knight.png"),
      alt: "elemental-knight",
    },
  },
  {
    name: "이슈타르의 링",
    skill: "ishtars-ring",
    isEssential: true,
    image: {
      src: require("@/public/skills/mercedes/ishtars-ring.png"),
      alt: "ishtars-ring",
    },
  },
  {
    name: "레전드리 스피어",
    skill: "legendary-spear",
    isEssential: true,
    image: {
      src: require("@/public/skills/mercedes/legendary-spear.png"),
      alt: "legendary-spear",
    },
  },
  {
    name: "라이트닝 엣지",
    skill: "lightning-edge",
    isOptional: true,
    image: {
      src: require("@/public/skills/mercedes/lightning-edge.png"),
      alt: "lightning-edge",
    },
  },
  {
    name: "래쓰 오브 엔릴",
    skill: "wrath-of-enril",
    isEssential: true,
    image: {
      src: require("@/public/skills/mercedes/wrath-of-enril.png"),
      alt: "wrath-of-enril",
    },
  },
];
