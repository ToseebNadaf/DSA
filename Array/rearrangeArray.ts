const rearrangeArray = (nums: number[]): number[] => {
  let positive: number[] = [];
  let negative: number[] = [];

  for (let num of nums) {
    if (num > 0) {
      positive.push(num);
    } else {
      negative.push(num);
    }
  }

  let result: number[] = [];
  for(let i = 0; i < positive.length; i++){
    result.push(positive[i]);
    result.push(negative[i]);
  } 

  return result;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
