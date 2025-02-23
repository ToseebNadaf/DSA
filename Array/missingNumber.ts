// Brute Force - 

const missingNumber = (nums: number[]): number => {
  let length = nums.length;

  for(let i = 0; i < length; i++){
    if(!nums.includes(i)){
      return i;
    }
  }

  return -1
}


// Optimal Solution - 

const missingNumber = (nums: number[]): number => {
  let length = nums.length;
  let expectedSum = length * (length + 1) / 2;
  let actualSum = nums.reduce((sum,total) => sum + total, 0);
  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1]));
