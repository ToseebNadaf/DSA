// Brute Force - 

function rotate(nums: number[], k: number): void {
  let length = nums.length;
  k = k % length;
  
  for (let i = 0; i < k; i++) {
      let last = nums[length - 1];
      for (let j = length - 1; j > 0; j--) {
          nums[j] = nums[j - 1];
      }
      nums[0] = last;
  }
}


// Optimal Solution - 

const rotate = (nums: number[], k:number): void => {
  let length = nums.length;
  k = k % length;

  const reverse = (start: number, end: number) => {
    while(start < end){
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(0, length - 1);
  reverse(0, k - 1);
  reverse(k, length - 1);
}

let values = [1, 2, 3, 4, 5, 6, 7];
rotate(values, 3);
console.log(values);