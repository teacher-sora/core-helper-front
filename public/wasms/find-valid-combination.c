#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

// 로직 설명
// candidates는 메인 스킬이 중복되지 않는 코어의 Index 배열(레벨 순)
// candidates = [[[0, 2, 3], [1, 5], . . .], [[. . .]], . . .]
// (for cand of candidates)로 cand = [[0, 2, 3], [1, 5], . . .]
// 각 배열에서 하나씩 요소를 추출 current = [0, 1, . . .]
// 해당 조합이 유효한지 검사
// 유효 조합이면 즉시 반환

// is_satisfied 개선: skillCount를 외부에서 전달받아 사용
bool is_satisfied(int* skillCount, int selectedCount) {
  for (int i = 0; i < selectedCount; i++) {
    if (skillCount[i] < 2) {
      return false;
    }
  }
  return true;
}

// 누적합(prefix sum) 배열 생성 함수
void prefix_sum(int* arr, int size, int* out) {
  out[0] = 0;
  for (int i = 0; i < size; i++) {
    out[i + 1] = out[i] + arr[i];
  }
}

// DFS 탐색 함수, 현재까지 선택한 코어들의 스킬 카운트를 누적 유지하며 pruning 적용
bool dfs(
  int* cores, int coreCount, int coreWidth,
  int* selectedSkills, int selectedCount,
  int* candidates, int* candidatePrefixSum, int candidateCount,
  int idx, int* path, int* output,
  int* skillCount
) {
  if (idx == candidateCount) {
    // 모든 후보를 선택했으니 조건 검사
    if (is_satisfied(skillCount, selectedCount)) {
      memcpy(output, path, sizeof(int) * candidateCount);
      return true;
    }
    return false;
  }

  int startIdx = candidatePrefixSum[idx];
  int length = candidatePrefixSum[idx + 1] - startIdx;

  for (int i = 0; i < length; i++) {
    int coreIdx = candidates[startIdx + i];
    path[idx] = coreIdx;

    // 선택한 코어의 스킬을 skillCount에 추가
    // selectedSkills 기준으로만 체크: O(coreWidth * selectedCount)
    for (int w = 0; w < coreWidth; w++) {
      int skill = cores[coreIdx * coreWidth + w];
      for (int s = 0; s < selectedCount; s++) {
        if (skill == selectedSkills[s]) {
          skillCount[s]++;
        }
      }
    }

    // 가지치기: 아직 만족 불가능하면 더 깊이 탐색하지 않음
    bool canContinue = true;
    for (int s = 0; s < selectedCount; s++) {
      // 현재 선택한 코어 수는 idx+1, 조건은 2개 이상 중첩
      // 남은 후보로 채울 수 없는 스킬이 있다면 중단
      int remainingCandidates = candidateCount - (idx + 1);
      int needed = 2 - skillCount[s];
      if (needed > remainingCandidates) {
        canContinue = false;
        break;
      }
    }

    if (canContinue && dfs(cores, coreCount, coreWidth, selectedSkills, selectedCount, candidates, candidatePrefixSum, candidateCount, idx + 1, path, output, skillCount)) {
      return true;
    }

    // 선택한 코어의 스킬 카운트 복구 (backtracking)
    for (int w = 0; w < coreWidth; w++) {
      int skill = cores[coreIdx * coreWidth + w];
      for (int s = 0; s < selectedCount; s++) {
        if (skill == selectedSkills[s]) {
          skillCount[s]--;
        }
      }
    }
  }
  return false;
}

int find_valid_combination(
  int* cores, int coreCount, int coreWidth,
  int* selectedSkills, int selectedCount,
  int* candidates, int* candidateSizes, int candidateCount,
  int* output
) {
  int* path = malloc(sizeof(int) * candidateCount);
  if (!path) return 0;

  int* skillCount = calloc(selectedCount, sizeof(int));
  if (!skillCount) {
    free(path);
    return 0;
  }

  int* candidatePrefixSum = malloc(sizeof(int) * (candidateCount + 1));
  if (!candidatePrefixSum) {
    free(path);
    free(skillCount);
    return 0;
  }
  prefix_sum(candidateSizes, candidateCount, candidatePrefixSum);

  bool found = dfs(cores, coreCount, coreWidth, selectedSkills, selectedCount,
  candidates, candidatePrefixSum, candidateCount,
  0, path, output, skillCount);

  free(path);
  free(skillCount);
  free(candidatePrefixSum);

  return found ? candidateCount : 0;
}

// 테스트용 main 함수
int main() {
  // 테스트 시 적절한 데이터로 호출하세요
  return 0;
}
