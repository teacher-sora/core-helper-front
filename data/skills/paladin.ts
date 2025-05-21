import { SkillData } from "@/types/job.types";

export const paladin: SkillData[] = [
  {
    name: "파이널 어택",
    skill: "final-attack",
    isEssential: true,
    image: {
      src: require("@/public/skills/paladin/final-attack.png"),
      alt: "파이널 어택"
    }
  },
  {
    name: "페이지 오더",
    skill: "page-order",
    image: {
      src: require("@/public/skills/paladin/page-order.png"),
      alt: "페이지 오더"
    }
  },
  {
    name: "디바인 스윙",
    skill: "divine-swing",
    image: {
      src: require("@/public/skills/paladin/divine-swing.png"),
      alt: "디바인 스윙"
    }
  },
  {
    name: "디바인 차지",
    skill: "divine-charge",
    isEssential: true,
    image: {
      src: require("@/public/skills/paladin/divine-charge.png"),
      alt: "디바인 차지"
    }
  },
  {
    name: "리프 어택",
    skill: "leaf-attack",
    image: {
      src: require("@/public/skills/paladin/leaf-attack.png"),
      alt: "리프 어택"
    }
  },
  {
    name: "블래스트",
    skill: "blast",
    isEssential: true,
    image: {
      src: require("@/public/skills/paladin/blast.png"),
      alt: "블래스트"
    }
  },
  {
    name: "디바인 저지먼트",
    skill: "divine-judgement",
    isEssential: true,
    image: {
      src: require("@/public/skills/paladin/divine-judgement.png"),
      alt: "디바인 저지먼트"
    }
  },
  {
    name: "생츄어리",
    skill: "sanctuary",
    isEssential: true,
    image: {
      src: require("@/public/skills/paladin/sanctuary.png"),
      alt: "생츄어리"
    }
  },
  {
    name: "스마이트",
    skill: "smite",
    isOptional: true,
    image: {
      src: require("@/public/skills/paladin/smite.png"),
      alt: "스마이트"
    }
  }
];