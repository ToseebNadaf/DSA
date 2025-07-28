const printValue = (value: number) => {
  for (let i = 0; i < value; i++) {
    let result = "";

    for (let j = 0; j < value - i; j++) {
      result += " ";
    }

    for (let k = 0; k < 2 * i + 1; k++) {
      result += "*";
    }

    console.log(result);
  }
  for (let i = value - 1; i >= 0; i--) {
    let result = "";

    for (let j = 0; j < i; j++) {
      result += " ";
    }

    for (let k = 0; k < 2 * value - (2 * i + 1); k++) {
      result += "*";
    }

    console.log(result);
  }
};

let value = 5;
printValue(value);
