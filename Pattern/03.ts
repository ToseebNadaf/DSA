const printNumbers = (rows: number) => {
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + "";
    }

    console.log(row.trim());
  }
};

printNumbers(6);
