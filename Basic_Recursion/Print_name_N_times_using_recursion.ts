const printValue = (value: string, num: number) => {
  if (num == 0) {
    return;
  }

  console.log(value);
  printValue(value, num - 1);
};

printValue("Toseeb", 6);
