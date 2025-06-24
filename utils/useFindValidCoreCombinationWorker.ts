import { WorkerRequest, WorkerResponse } from "@/types/worker.types";

export const runFindValidCoreCombinationWorker = (cores: WorkerRequest["cores"], selectedSkills: WorkerRequest["selectedSkills"], candidates: WorkerRequest["candidates"], requiredOverlap: WorkerRequest["requiredOverlap"]): Promise<WorkerResponse["result"]> => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL("@/workers/findValidCoreCombination.ts", import.meta.url), { type: "module" });

    worker.onmessage = (event) => {
      resolve(event.data.result);
      worker.terminate();
    };

    worker.onerror = (error) => {
      reject(error);
      worker.terminate();
    }

    worker.postMessage({ cores, selectedSkills, candidates, requiredOverlap });
  });
};