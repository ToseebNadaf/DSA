const subarraySum = (nums: number[], k: number): number => {
  let count = 0;
  let n = nums.length;

  for (let start = 0; start < n; start++) {
      let sum = 0;
      
      for (let end = start; end < n; end++) {
          sum += nums[end];

          if (sum === k) {
              count++;
          }
      }
  }
  return count;
}

console.log(subarraySum([1,1,1], 2));
