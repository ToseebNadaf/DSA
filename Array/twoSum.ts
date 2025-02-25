// Brute Force -

const twoSum = (nums: number[], target: number): number[] => {
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }

  return [-1];
};

// Optimal Solution -

const twoSum = (nums: number[], target: number): number[] => {
  let length = nums.length;
  let result = new Map<number, number>();

  for (let i = 0; i < length; i++) {
    let value = target - nums[i];
    if (value == nums[i]) {
      return [result.get(value), i];
    }

    result.set(value, i);
  }

  return [-1];
};

console.log(twoSum([2, 7, 11, 15], 9));
