const rotate_array = (values: number[], k: number) => {
  k = k % values.length;
  if (k < 0) {
    k = k + values.length;
  }

  for (let i = 1; i <= k; i++) {
    let last = values[values.length - 1];
    for (let j = values.length - 1; j >= 1; j--) {
      values[j] = values[j - 1];
    }

    values[0] = last;
  }
  return values;
};

let k = 3;
let values = [1, 2, 3, 4, 5];

console.log(rotate_array(values, k));
