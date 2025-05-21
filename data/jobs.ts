import { JobData } from "@/types/job.types";

export const jobs: Array<JobData> = [
  {
    name: "전사",
    job: "warrior",
    image: {
      src: require("@/public/jobs/warrior.png"),
      alt: "warrior"
    }
  },
  {
    name: "마법사",
    job: "magician",
    image: {
      src: require("@/public/jobs/magician.png"),
      alt: "magician"
    }
  },
  {
    name: "궁수",
    job: "bowman",
    image: {
      src: require("@/public/jobs/bowman.png"),
      alt: "bowman"
    }
  },
  {
    name: "도적",
    job: "thief",
    image: {
      src: require("@/public/jobs/thief.png"),
      alt: "thief"
    }
  },
  {
    name: "해적",
    job: "pirate",
    image: {
      src: require("@/public/jobs/pirate.png"),
      alt: "pirate"
    }
  }
]