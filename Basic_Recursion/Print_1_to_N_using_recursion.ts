const printValue = (num: number, value: number = 1) => {
  if (value > num) return;

  console.log(value);

  printValue(num, value + 1);
};

printValue(5);
