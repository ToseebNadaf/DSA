const setZeroes = (nums: number[][]): void => {
  let m = nums.length;
  let n = nums[0].length;
  let rowMarked: boolean[] = new Array(m).fill(false);
  let colMarked: boolean[] = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i][j] === 0) {
        rowMarked[i] = true;
        colMarked[i] = true;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    if (rowMarked[i]) {
      for (let j = 0; j < n; j++) {
        nums[i][j] = 0;
      }
    }
  }

  for (let j = 0; j < n; j++) {
    if (colMarked[j]) {
      for (let i = 0; i < m; i++) {
        nums[i][j] = 0;
      }
    }
  }
};

let matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
setZeroes(matrix1);
console.log(matrix1);
