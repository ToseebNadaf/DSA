// Brute Force - 

const longestSubarrayWithSumK = (nums: number[], value:number): number => {
  let length = nums.length;
  let maxLength = 0;

  for(let i = 0; i < length; i++){
    let sum = 0;
    for(let j = i; j < length; j++){
      sum += nums[j];

      if(sum == value){
        maxLength = Math.max(maxLength, j - i + 1);
      }
    }
  }

  return maxLength;
}



// Optimal Solution - 

const longestSubarrayWithSumK = (nums: number[], k:number): number => {
  let prefixSumMap = new Map<number, number>();
    let sum = 0, maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === k) {
            maxLength = i + 1;
        }

        if (prefixSumMap.has(sum - k)) {
            maxLength = Math.max(maxLength, i - prefixSumMap.get(sum - k)!);
        }

        if (!prefixSumMap.has(sum)) {
            prefixSumMap.set(sum, i);
        }
    }

    return maxLength;
}


console.log(longestSubarrayWithSumK([10, 5, 2, 7, 1, -10], 15));
