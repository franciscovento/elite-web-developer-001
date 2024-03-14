// canSum(7,[7,3,5])
// Sliding Window
export const canSum = (target: number, numbers: number[], memo = {}) => {
  // if (target in memo) return memo[target];
  // memory leak
  if (target === 0) return true;
  if (target < 0) return false;
  // 7,[0]
  for (const num of numbers) {
    const difference = target - num;
    // 7 - 9 = -2
    // 7 - 4
    // 7 - 3
    // 7 - 5
    if (canSum(difference, numbers)) {
      // memo[target] = true;
      return true;
    }
  }
  // memo[target] = false;
  return false;
};
