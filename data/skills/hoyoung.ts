import { SkillData } from "@/types/job.types";

export const hoyoung: SkillData[] = [
  // 필수 강화 코어
  {
    name: "토파류",
    skill: "toparyu",
    isEssential: true,
    image: {
      src: require("@/public/skills/hoyoung/toparyu.png"),
      alt: "toparyu"
    }
  },
  {
    name: "여의선 인",
    skill: "yeouiseon-in",
    isEssential: true,
    image: {
      src: require("@/public/skills/hoyoung/yeouiseon-in.png"),
      alt: "yeouiseon-in"
    }
  },
  {
    name: "권술 흡성와류",
    skill: "heupseong-waryu",
    isEssential: true,
    image: {
      src: require("@/public/skills/hoyoung/heupseong-waryu.png"),
      alt: "heupseong-waryu"
    }
  },
  {
    name: "파초풍",
    skill: "pachopung",
    isEssential: true,
    image: {
      src: require("@/public/skills/hoyoung/pachopung.png"),
      alt: "pachopung"
    }
  },
  {
    name: "추적 귀화부",
    skill: "chujeok-gwihwabu",
    isEssential: true,
    image: {
      src: require("@/public/skills/hoyoung/chujeok-gwihwabu.png"),
      alt: "chujeok-gwihwabu"
    }
  },
  {
    name: "권술 호접지몽",
    skill: "hojeop-jimong",
    isEssential: true,
    image: {
      src: require("@/public/skills/hoyoung/hojeop-jimong.png"),
      alt: "hojeop-jimong"
    }
  },
  {
    name: "환영 분신부",
    skill: "hwanyeong-bunsinbu",
    isEssential: true,
    image: {
      src: require("@/public/skills/hoyoung/hwanyeong-bunsinbu.png"),
      alt: "hwanyeong-bunsinbu"
    }
  },

  // 선택 강화 코어
  {
    name: "권술 미생강변",
    skill: "misaeng-gangbyeon",
    isOptional: true,
    image: {
      src: require("@/public/skills/hoyoung/misaeng-gangbyeon.png"),
      alt: "misaeng-gangbyeon"
    }
  },
  {
    name: "마봉 호로부",
    skill: "mabong-horobu",
    isOptional: true,
    image: {
      src: require("@/public/skills/hoyoung/mabong-horobu.png"),
      alt: "mabong-horobu"
    }
  }
];
