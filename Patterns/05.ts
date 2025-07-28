const printValue = (value: number) => {
  for (let i = 1; i <= value; i++) {
    let result = "";
    for (let j = i; j <= value; j++) {
      result += "*";
    }
    console.log(result);
  }
};

let value = 5;
printValue(value);
