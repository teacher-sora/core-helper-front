export interface WorkerRequest {
  coreSkills: string[][];
  selectedSkills: string[];
  arrays: number[][];
}

export interface WorkerResponse {
  result: number[];
}