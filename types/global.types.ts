import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ImageData {
  src: StaticImport,
  alt: string
}

export interface ResultData {
  message?: string,
  combinations?: string[][]
}