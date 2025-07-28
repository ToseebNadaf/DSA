const printValue = (value: number) => {
  for (let i = 0; i < value; i++) {
    let result = "";
    for (let j = 0; j < value; j++) {
      result += "* ";
    }
    console.log(result);
  }
};

let value = 4;

printValue(value);
