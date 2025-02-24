const moveZeroes = (nums: number[]): void => {
  let length = nums.length;
  let left = 0;

  for(let right = 0; right < length; right++){
    if(nums[right] !== 0){
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
}

let nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);