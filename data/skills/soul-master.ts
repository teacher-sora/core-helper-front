import { SkillData } from "@/types/job.types";

export const soulMaster: SkillData[] = [
  {
    name: "솔라 슬래시",
    skill: "solar-slash",
    isEssential: true,
    image: {
      src: require("@/public/skills/soul-master/solar-slash.png"),
      alt: "솔라 슬래시"
    }
  },
  {
    name: "코스믹 매터",
    skill: "cosmic matter",
    image: {
      src: require("@/public/skills/soul-master/cosmic-matter.png"),
      alt: "코스믹 매터"
    }
  },
  {
    name: "코스믹 샤워",
    skill: "cosmic shower",
    isEssential: true,
    image: {
      src: require("@/public/skills/soul-master/cosmic-shower.png"),
      alt: "코스믹 샤워"
    }
  },
  {
    name: "라우드 러쉬",
    skill: "loud-rush",
    isOptional: true,
    image: {
      src: require("@/public/skills/soul-master/loud-rush.png"),
      alt: "라우드 러쉬"
    }
  },
  {
    name: "코스믹 버스트",
    skill: "cosmic-burst",
    isEssential: true,
    image: {
      src: require("@/public/skills/soul-master/cosmic-burst.png"),
      alt: "코스믹 버스트"
    }
  },
  {
    name: "소울 페네트레이션",
    skill: "soul-penetration",
    image: {
      src: require("@/public/skills/soul-master/soul-penetration.png"),
      alt: "소울 페네트레이션"
    }
  },
  {
    name: "솔루나 슬래시",
    skill: "soluna-slash",
    isEssential: true,
    image: {
      src: require("@/public/skills/soul-master/soluna-slash.png"),
      alt: "솔루나 슬래시"
    }
  },
  {
    name: "블레이징 어썰트",
    skill: "blazing-assault",
    isOptional: true,
    image: {
      src: require("@/public/skills/soul-master/blazing-assault.png"),
      alt: "블레이징 어썰트"
    }
  }
];