// Brute Force - 

const findMaxConsecutiveOnes = (nums: number[]): number => {
  let length = nums.length;
  let maxCount = 0;

  for(let i = 0; i < length; i++){
    let count = 0;
    for(let j = i; j < length; j++){
      if(nums[j] == 1){
        count++;
      } else {
        break;
      }
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}


// Optimal Solution - 

const findMaxConsecutiveOnes = (nums: number[]): number => {
  let maxCount = 0, count = 0;

  for(let num of nums){
    if(num == 1){
      count++;
      maxCount = Math.max(maxCount, count);
    } else{
      count = 0;
    }
  }

  return maxCount;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
