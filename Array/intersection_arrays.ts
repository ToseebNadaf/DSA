const intersect_array = (arr1: number[], arr2: number[]) => {
  let values: number[] = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      values.push(arr1[i]);
      i++;
      j++;
    }
  }

  return values;
};

let arr1 = [10, 19, 30, 30, 40];
let arr2 = [19, 30, 40, 60, 70];

console.log(intersect_array(arr1, arr2));
