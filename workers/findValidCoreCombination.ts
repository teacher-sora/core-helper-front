import { WorkerRequest, WorkerResponse } from "@/types/worker.types";

self.onmessage = (event: MessageEvent<WorkerRequest>) => {
  const { coreSkills, selectedSkills, arrays } = event.data;

  const generator = findValidCombination(coreSkills, selectedSkills, arrays);
  const validCombination: number[] = generator.next().value;

  const response: WorkerResponse = { result: validCombination };
  self.postMessage(response);
};

function* findValidCombination<T extends number>(coreSkills: string[][], selectedSkills: string[], arrays: T[][], index = 0, current: T[] = []): Generator<T[]> {
  if (index === arrays.length) {
    let skillCounter: { [key: string]: number } = {};
    current.forEach((coreIndex) => {
      coreSkills[coreIndex].forEach((skill) => {
        skillCounter[skill] = (skillCounter[skill] ?? 0) + 1;
      });
    });

    const isSatisfied = selectedSkills.every((skill) => skillCounter[skill] >= 2);

    if (isSatisfied) {
      yield [...current];
      return true;
    }

    return false;
  }

  for (const item of arrays[index]) {
    current.push(item);
    const done = yield* findValidCombination(coreSkills, selectedSkills, arrays, index + 1, current);
    current.pop();

    if (done) {
      return true;
    }
  }

  return false;
}