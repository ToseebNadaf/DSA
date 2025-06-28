const reverse_array = (values: number[]) => {
  let i = 0;
  let j = values.length - 1;

  while (i < j) {
    let temp = values[i];
    values[i] = values[j];
    values[j] = temp;

    i++;
    j--;
  }

  return values;
};

let values = [1, 2, 3, 4, 5];

console.log(reverse_array(values));
