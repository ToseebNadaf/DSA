const rotate90 = (nums: number[][]): void => {
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      [nums[i][j], nums[j][i]] = [nums[j][i], nums[i][j]];
    }
  }

  for(let i = 0; i < length; i++){
    nums[i].reverse();
  }
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate90(matrix);
console.log(matrix);
