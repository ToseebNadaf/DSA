const printRectangle = (row: number, column: number) => {
  for (let i = 0; i < row; i++) {
    let row = "";
    for (let j = 0; j < column; j++) {
      row += "* ";
    }

    console.log(row.trim());
  }
};

printRectangle(6, 6);
