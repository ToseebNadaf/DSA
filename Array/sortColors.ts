// Brute Force -

const sortColors = (nums: number[]): void => {
  let length = nums.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
};

// Optimal Solution -

const sortColors = (nums: number[]): void => {
  let length = nums.length;
  let low = 0,
    mid = 0,
    high = length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      [nums[mid], nums[low]] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
};

let nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2);
