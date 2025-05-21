import { SkillData } from "@/types/job.types";

export const nightWalker: SkillData[] = [
  {
    name: "럭키 세븐",
    skill: "lucky-seven",
    image: {
      src: require("@/public/skills/night-walker/lucky-seven.png"),
      alt: "럭키 세븐"
    }
  },
  {
    name: "쉐도우 배트",
    skill: "shadow-bat",
    isEssential: true,
    image: {
      src: require("@/public/skills/night-walker/shadow-bat.png"),
      alt: "쉐도우 배트"
    }
  },
  {
    name: "트리플 스로우",
    skill: "triple-throw",
    image: {
      src: require("@/public/skills/night-walker/triple-throw.png"),
      alt: "트리플 스로우"
    }
  },
  {
    name: "스타더스트",
    skill: "stardust",
    image: {
      src: require("@/public/skills/night-walker/stardust.png"),
      alt: "스타더스트"
    }
  },
  {
    name: "쿼드러플 스로우",
    skill: "quadruple-throw",
    image: {
      src: require("@/public/skills/night-walker/quadruple-throw.png"),
      alt: "쿼드러플 스로우"
    }
  },
  {
    name: "다크니스 오멘",
    skill: "darkness-omen",
    isEssential: true,
    image: {
      src: require("@/public/skills/night-walker/darkness-omen.png"),
      alt: "다크니스 오멘"
    }
  },
  {
    name: "쉐도우 스티치",
    skill: "shadow-stitch",
    image: {
      src: require("@/public/skills/night-walker/shadow-stitch.png"),
      alt: "쉐도우 스티치"
    }
  },
  {
    name: "퀸터플 스로우",
    skill: "quintuple-throw",
    isEssential: true,
    image: {
      src: require("@/public/skills/night-walker/quintuple-throw.png"),
      alt: "퀸터플 스로우"
    }
  },
  {
    name: "도미니언",
    skill: "dominion",
    isEssential: true,
    image: {
      src: require("@/public/skills/night-walker/dominion.png"),
      alt: "도미니언"
    }
  }
];
