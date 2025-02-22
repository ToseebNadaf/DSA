const findLargestElement = (value: number[]): number => {
  let maxElement = value[0];

  for(let i = 0; i < value.length; i++){
    if(value[i] > maxElement){
      maxElement = value[i];
    }
  }

  return maxElement;
}

console.log(findLargestElement([1, 8, 7, 56, 90]))