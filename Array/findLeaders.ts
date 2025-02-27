// Brute Force -

const findLeaders = (nums: number[]): number[] => {
  let length = nums.length;
  let leaders: number[] = [];

  for (let i = 0; i < length; i++) {
    let leader = true;
    for (let j = i + 1; j < length; j++) {
      if (nums[i] < nums[j]) {
        leader = false;
        break;
      }
    }

    if (leader) {
      leaders.push(nums[i]);
    }
  }

  return leaders;
};

// Optimal Solution -

const findLeaders = (nums: number[]): number[] => {
  let length = nums.length;
  let result: number[] = [];
  let max_from_right = nums[length - 1];

  result.push(max_from_right);

  for (let i = length - 2; i >= 0; i--) {
    if (nums[i] > max_from_right) {
      max_from_right = nums[i];
      result.push(nums[i]);
    }
  }

  return result.reverse();
};

console.log(findLeaders([16, 17, 4, 3, 5, 2]));
