// Brute Force -

const unionOfSortedArrays = (a: number[], b: number[]): number[] => {
  let result = new Set<number>();

  for (let value of a) {
    result.add(value);
  }

  for (const value of b) {
    result.add(value);
  }

  return Array.from(result).sort((a, b) => a - b);
};

// Optimal Solution -

const unionOfSortedArrays = (a: number[], b: number[]): number[] => {
  let i = 0,
    j = 0;
  let result: number[] = [];

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      if (result.length == 0 || result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
    } else if (a[i] > b[j]) {
      if (result.length == 0 || result[result.length - 1] !== b[j]) {
        result.push(b[j]);
      }
      j++;
    } else {
      if (result.length == 0 || result[result.length - 1] !== a[i]) {
        result.push(a[i]);
      }
      i++;
      j++;
    }
  }

  while (i < a.length) {
    if (result.length == 0 || result[result.length - 1] !== a[i]) {
      result.push(a[i]);
    }
    i++;
  }

  while (j < b.length) {
    if (result.length === 0 || result[result.length - 1] !== b[j]) {
      result.push(b[j]);
    }
    j++;
  }

  return result;
};

console.log(unionOfSortedArrays([1, 2, 3, 4, 5], [1, 2, 3, 6, 7]));
