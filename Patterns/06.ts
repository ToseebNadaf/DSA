const printValue = (value: number) => {
  for (let i = value; i >= 1; i--) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += `${j}`;
    }
    console.log(result);
  }
};

let value = 5;
printValue(value);
