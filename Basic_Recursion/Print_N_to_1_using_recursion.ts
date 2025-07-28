const printValue = (value: number) => {
  if (value == 0) return;

  console.log(value);

  printValue(value - 1);
};

printValue(5);
