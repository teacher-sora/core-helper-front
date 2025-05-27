export const runFindValidCoreCombinationWorker = (coreSkills: string[][], selectedSkills: string[], arrays: number[][]): Promise<number[]> => {
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

    worker.postMessage({ coreSkills, selectedSkills, arrays });
  });
};