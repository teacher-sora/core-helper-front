import { SkillData } from "@/types/job.types";

export const striker: SkillData[] = [
  {
    name: "충아",
    skill: "chunga",
    image: {
      src: require("@/public/skills/striker/chunga.png"),
      alt: "chunga"
    }
  },
  {
    name: "섬광",
    skill: "seomgwang",
    image: {
      src: require("@/public/skills/striker/seomgwang.png"),
      alt: "seomgwang"
    }
  },
  {
    name: "회축",
    skill: "hoechuk",
    image: {
      src: require("@/public/skills/striker/hoechuk.png"),
      alt: "hoechuk"
    }
  },
  {
    name: "파도",
    skill: "pado",
    isEssential: true,
    image: {
      src: require("@/public/skills/striker/pado.png"),
      alt: "pado"
    }
  },
  {
    name: "승천",
    skill: "seungcheon",
    isOptional: true,
    image: {
      src: require("@/public/skills/striker/seungcheon.png"),
      alt: "seungcheon"
    }
  },
  {
    name: "뇌성",
    skill: "noeseong",
    image: {
      src: require("@/public/skills/striker/noeseong.png"),
      alt: "noeseong"
    }
  },
  {
    name: "질풍",
    skill: "jilpung",
    isEssential: true,
    image: {
      src: require("@/public/skills/striker/jilpung.png"),
      alt: "jilpung"
    }
  },
  {
    name: "벽력",
    skill: "byeokryeok",
    isEssential: true,
    image: {
      src: require("@/public/skills/striker/byeokryeok.png"),
      alt: "byeokryeok"
    }
  },
  {
    name: "섬멸",
    skill: "seommyeol",
    isEssential: true,
    image: {
      src: require("@/public/skills/striker/seommyeol.png"),
      alt: "seommyeol"
    }
  },
  {
    name: "해신강림",
    skill: "haesinganglim",
    isEssential: true,
    image: {
      src: require("@/public/skills/striker/haesinganglim.png"),
      alt: "haesinganglim"
    }
  }
];
