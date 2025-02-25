// Brute Force -

const majorityElement = (nums: number[]): number => {
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    let count = 0;
    for (let j = 0; j < length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }

      if (count > Math.floor(length / 2)) {
        return nums[i];
      }
    }
  }

  return -1;
};

// Optimal Solution -

const majorityElement = (nums: number[]): number => {
  let candidate = 0,
    count = 0;

  for (let num of nums) {
    if (count == 0) {
      candidate = num;
      count++;
    } else {
      count += num == candidate ? 1 : -1;
    }
  }

  return candidate;
};

console.log(majorityElement([3, 2, 3]));
