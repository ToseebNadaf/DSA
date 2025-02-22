// Brute Force -

const removeDuplicates = (nums: number[]): number => {
  let uniqueSet = new Set(nums);
  let uniqueArray = Array.from(uniqueSet);

  for(let i = 0; i < uniqueArray.length; i++){
    nums[i] = uniqueArray[i];
  }

  return uniqueArray.length;
}


// Optimal Solution -

function removeDuplicates(nums: number[]): number {
  let length = nums.length;
  let i = 0;

  for (let j = 1; j < length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1));
