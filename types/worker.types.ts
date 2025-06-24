export interface WorkerRequest {
  cores: string[][];
  selectedSkills: string[];
  candidates: number[][][];
  requiredOverlap: 2 | 3;
}

export interface WorkerResponse {
  result: number[];
}