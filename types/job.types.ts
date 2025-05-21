import { ImageData } from "@/types/global.types";

// 직업군
export interface JobData {
  name: string
  job: JobCategory
  image: ImageData
}

export type JobCategory = "warrior" | "magician" | "bowman" | "thief" | "pirate"

export type Warriors = "hero" | "paladin" | "dark-knight" | "soul-master" | "mihile" | "blaster" | "demon-slayer" | "demon-avenger" | "aran" | "kaiser" | "adele" | "zero"
export type Magicians = "fire-poison" | "ice-lightning" | "bishop" | "flame-wizard" | "battle-mage" | "evan" | "luminous" | "illium" | "lara" | "kinesis"
export type Bowmans = "bowmaster" | "marksman" | "pathfinder" | "wind-breaker" | "wild-hunter" | "mercedes" | "kain"
export type Thiefs = "night-lord" | "shadower" | "dual-blade" | "night-walker" | "xenon" | "phantom" | "cadena" | "khali" | "hoyoung"
export type Pirates = "viper" | "captain" | "cannon-shooter" | "striker" | "mechanic" | "xenon" | "eunwol" | "angelic-buster" | "ark"

export type JobClassCategory = Warriors | Magicians | Bowmans | Thiefs | Pirates

// 세부 직업
export interface JobClassData {
  name: string,
  jobClass: JobClassCategory,
  image: ImageData
}

export type JobClassesDict = {
  [key in JobCategory]: JobClassData[]
}

export interface SkillData {
  name: string,
  skill: string,
  isEssential?: boolean,
  isOptional?: boolean,
  image: ImageData,
}

export type SkillDict = {
  [key in JobClassCategory]: SkillData[]
}