const max_element = (values: number[]) => {
  let max = values[0];

  for (let i = 1; i <= values.length; i++) {
    if (max < values[i]) {
      max = values[i];
    }
  }

  return max;
};

let values = [1, 2, 34, 55, 4];

console.log(max_element(values));
