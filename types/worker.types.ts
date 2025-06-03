export interface WorkerRequest {
  cores: string[][];
  selectedSkills: string[];
  candidates: number[][][];
}

export interface WorkerResponse {
  result: number[];
}