import { WorkerRequest, WorkerResponse } from "@/types/worker.types";

let wasmModule: any = null;
let wasmMemory!: WebAssembly.Memory;
let wasmLoadPromise: Promise<void> | null = null;

const skillToInt: Record<string, number> = {};
let skillCounter = 1;

const getSkillId = (skill: string) => {
  if (!skillToInt[skill]) {
    skillToInt[skill] = skillCounter++;
  }

  return skillToInt[skill];
}

self.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  let response!: WorkerResponse;

  try {
    const { cores, selectedSkills, candidates } = event.data;
  
    await loadWasm();
  
    const intCores = cores.map((core) => core.map(getSkillId));
    const intSelectedSkills = selectedSkills.map(getSkillId);
  
    let validCombination: number[] = [];
  
    for (const cand of candidates) {
      const result = callWasmFindValidCombination(intCores, intSelectedSkills, cand);
      if (result.length > 0) {
        validCombination = result;
        break;
      }
    }
  
    response = { result: validCombination };
  } catch (error: any) {
    console.error(error)
    response = { result: [] }
  } finally {
    self.postMessage(response);
  }
};

const loadWasm = (): Promise<void> => {
  if (wasmModule) return Promise.resolve();
  if (wasmLoadPromise) return wasmLoadPromise;

  const wasiImports = {
    env: {
      memory: new WebAssembly.Memory({ initial: 10 }), // 또는 export된 memory 사용
      // malloc, free는 나중에 export에서 받아오므로 생략 가능
    },
    wasi_snapshot_preview1: {
      fd_write: () => 0,
      fd_read: () => 0,
      fd_seek: () => 0,
      fd_close: () => 0,
      proc_exit: (code: number) => { throw new Error(`WASI exit with code ${code}`); },
      clock_time_get: () => 0,
      environ_sizes_get: () => 0,
      environ_get: () => 0,
      args_sizes_get: () => 0,
      args_get: () => 0,
    }
  };

  wasmLoadPromise = fetch("/wasms/find-valid-combination.wasm")
    .then((res) => res.arrayBuffer())
    .then((buffer) => WebAssembly.instantiate(buffer, wasiImports))
    .then((instance) => {
      wasmModule = instance.instance.exports;
      wasmMemory = instance.instance.exports.memory as WebAssembly.Memory;
    });

  return wasmLoadPromise;
}

const allocAndWrite = (data: number[]): number => {
  const ptr = wasmModule.malloc(data.length * 4);
  const heap = new Int32Array(wasmMemory.buffer, ptr, data.length);
  heap.set(data);

  return ptr;
}

const callWasmFindValidCombination = (
  cores: number[][],
  selectedSkills: number[],
  candidates: number[][]
): number[] => {
  const coresFlat = cores.flat();
  const coreWidth = cores[0].length;
  const coreCount = cores.length;

  const candidateFlat = candidates.flat();
  const candidateLengths = candidates.map(c => c.length);
  const candidateCount = candidates.length;

  const coresPtr = allocAndWrite(coresFlat);
  const selectedPtr = allocAndWrite(selectedSkills);
  const candidatePtr = allocAndWrite(candidateFlat);
  const candidateLengthsPtr = allocAndWrite(candidateLengths);
  const outputPtr = wasmModule.malloc(candidateCount * 4);

  const resultLen = wasmModule.find_valid_combination(
    coresPtr, coreCount, coreWidth,
    selectedPtr, selectedSkills.length,
    candidatePtr, candidateLengthsPtr, candidateCount,
    outputPtr
  );

  const result = new Int32Array(wasmMemory.buffer, outputPtr, resultLen);
  const combination = Array.from(result);

  wasmModule.free(coresPtr);
  wasmModule.free(selectedPtr);
  wasmModule.free(candidatePtr);
  wasmModule.free(candidateLengthsPtr);
  wasmModule.free(outputPtr);

  return combination;
};