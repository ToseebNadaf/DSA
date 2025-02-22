// Brute Force - 

const checkRotatedSorted = (nums: number[]): boolean => {
  let length = nums.length;

  let sortedNums = [...nums].sort((a,b) => a - b);

  for(let i = 0; i < length; i++){
    let rotatedNums = [...nums.slice(i), ...nums.slice(0, i)];
    if(JSON.stringify(rotatedNums) === JSON.stringify(sortedNums)){
      return true;
    }
  }

  return false;
}


// Optimal Solution - 

const checkRotatedSorted = (nums: number[]): boolean => {
  let length = nums.length;
  let count = 0;

  for(let i = 0; i < length; i++){
    if(nums[i] > nums[(i + 1) % length]){
      count++;

      if(count > 1){
        return false;
      }
    }
  }

  return true;
}

console.log(checkRotatedSorted([3,4,5,1,2]));