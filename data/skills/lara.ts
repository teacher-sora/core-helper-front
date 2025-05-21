import { SkillData } from "@/types/job.types";

export const lara: SkillData[] = [
  {
    name: "정기 뿌리기",
    skill: "energy-spread",
    isEssential: true,
    image: {
      src: require("@/public/skills/lara/energy-spread.png"),
      alt: "energy-spread",
    },
  },
  {
    name: "잠 깨우기",
    skill: "awakening",
    isEssential: true,
    image: {
      src: require("@/public/skills/lara/awakening.png"),
      alt: "awakening",
    },
  },
  {
    name: "산 꼬마",
    skill: "mountain-child",
    isOptional: true,
    image: {
      src: require("@/public/skills/lara/mountain-child.png"),
      alt: "mountain-child",
    },
  },
  {
    name: "산의 씨앗",
    skill: "mountain-seed",
    isOptional: true,
    image: {
      src: require("@/public/skills/lara/mountain-seed.png"),
      alt: "mountain-seed",
    },
  },
  {
    name: "용맥 분출",
    skill: "vein-eruption",
    isEssential: true,
    image: {
      src: require("@/public/skills/lara/vein-eruption.png"),
      alt: "vein-eruption",
    },
  },
  {
    name: "용맥 흡수",
    skill: "vein-absorption",
    isEssential: true,
    image: {
      src: require("@/public/skills/lara/vein-absorption.png"),
      alt: "vein-absorption",
    },
  },
  {
    name: "넝쿨 타래",
    skill: "vine-tangle",
    image: {
      src: require("@/public/skills/lara/vine-tangle.png"),
      alt: "vine-tangle",
    },
  },
  {
    name: "용맥의 자취",
    skill: "vein-trail",
    image: {
      src: require("@/public/skills/lara/vein-trail.png"),
      alt: "vein-trail",
    },
  },
];
