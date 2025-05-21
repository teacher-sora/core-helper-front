import { SkillData } from "@/types/job.types";

export const flameWizard: SkillData[] = [
  {
    name: "오비탈 플레임",
    skill: "orbital-flame",
    isEssential: true,
    image: {
      src: require("@/public/skills/flame-wizard/orbital-flame.png"),
      alt: "orbital-flame",
    },
  },
  {
    name: "플레임 바이트",
    skill: "flame-bite",
    image: {
      src: require("@/public/skills/flame-wizard/flame-bite.png"),
      alt: "flame-bite",
    },
  },
  {
    name: "플레임 볼텍스",
    skill: "flame-vortex",
    image: {
      src: require("@/public/skills/flame-wizard/flame-vortex.png"),
      alt: "flame-vortex",
    },
  },
  {
    name: "오비탈 익스플로젼",
    skill: "orbital-explosion",
    isEssential: true,
    image: {
      src: require("@/public/skills/flame-wizard/orbital-explosion.png"),
      alt: "orbital-explosion",
    },
  },
  {
    name: "플레임 템페스타",
    skill: "flame-tempesta",
    image: {
      src: require("@/public/skills/flame-wizard/flame-tempesta.png"),
      alt: "flame-tempesta",
    },
  },
  {
    name: "마엘스트롬",
    skill: "maelstrom",
    image: {
      src: require("@/public/skills/flame-wizard/maelstrom.png"),
      alt: "maelstrom",
    },
  },
  {
    name: "블레이징 익스팅션",
    skill: "blazing-extinction",
    isEssential: true,
    image: {
      src: require("@/public/skills/flame-wizard/blazing-extinction.png"),
      alt: "blazing-extinction",
    },
  },
  {
    name: "인페르노라이즈",
    skill: "infernoraize",
    isEssential: true,
    image: {
      src: require("@/public/skills/flame-wizard/infernoraize.png"),
      alt: "infernoraize",
    },
  },
  {
    name: "피닉스 드라이브",
    skill: "phoenix-drive",
    isEssential: true,
    image: {
      src: require("@/public/skills/flame-wizard/phoenix-drive.png"),
      alt: "phoenix-drive",
    },
  },
  {
    name: "카타클리즘",
    skill: "cataclysm",
    isOptional: true,
    image: {
      src: require("@/public/skills/flame-wizard/cataclysm.png"),
      alt: "cataclysm",
    },
  }
];
