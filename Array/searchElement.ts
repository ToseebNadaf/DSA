// Linear Search - 

const searchElement = (nums: number[], value: number): boolean => {

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === value){
      return true;
    }
  }

  return false;
}

// Binary Search - 

const searchElement = (nums: number[], value: number): boolean => {
  let left = 0, right = nums.length - 1;

  while(left <= right){
    let mid = Math.floor((left + right) / 2);

    if(nums[mid] === value) return true;
    else if(nums[mid] > value) right = mid - 1;
    else left = mid + 1;
  }

  return false;
}

console.log(searchElement([1, 2, 3, 4, 6], 6));
