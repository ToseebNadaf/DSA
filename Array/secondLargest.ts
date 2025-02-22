// Brute Force - 

const secondLargest = (value: number[]): number => {
  if(value.length < 2) return -1;

  value.sort((a, b) => b - a);

  let large = value[0];

  for(let i = 1; i < value.length; i++){
    if(value[i] < large){
      return value[i];
    }
  }

  return -1;

}


// Optimal Solution -

const secondLargest = (values: number[]): number => {
  let first = -1, second = -1;

  for (let value of values) {
    if(value > first){
      second = first;
      first = value;
    } else if(second < value && value !== first){
      second = value;
    }
  }

  return second;

}

console.log(secondLargest([12, 35, 1, 10, 34, 1]));