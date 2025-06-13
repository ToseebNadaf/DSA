const printTriangle = (row: number) => {
  for (let i = 1; i <= row; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }
};

printTriangle(6);
