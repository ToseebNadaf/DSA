const add_arrays = (arr1: number[], arr2: number[]) => {
  let value: number[] = [];

  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (i >= 0) {
      sum += arr1[i];
      i--;
    }

    if (j >= 0) {
      sum += arr2[j];
      j--;
    }

    let rem = sum % 10;
    carry = Math.floor(sum / 10);

    value.unshift(rem);
  }

  if (carry > 0) {
    value.unshift(carry);
  }

  return value;
};

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 3, 4];

console.log(add_arrays(arr1, arr2));
