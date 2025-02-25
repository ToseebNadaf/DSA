// Brute Force -

const maxSubArray = (nums: number[]): number => {
  let length = nums.length;
  let maxSum = 0;

  for (let i = 0; i < length; i++) {
    let sum = 0;
    for (let j = i; j < length; j++) {
      sum += nums[j];
      maxSum = Math.max(sum, maxSum);
    }
  }

  return maxSum;
};

// Optimal Solution -

const maxSubArray = (nums: number[]): number => {
  let length = nums.length;
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
