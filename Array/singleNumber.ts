// Brute Force - 

const singleNumber = (nums: number[]): number => {
  let length = nums.length;

  for(let i = 0; i < length; i++){
    let count = 0;
    for(let j = 0; j < length; j++){
      if(nums[i] == nums[j]){
        count++;
      }
    }

    if(count == 1){
      return nums[i];
    }
  }

  return -1;
}


// Optimal Solution - 

const singleNumber = (nums: number[]): number => {
  let result = 0;

  for(let num of nums){
    result ^= num;
  }

  return result;
}

console.log(singleNumber([1,1,2]));