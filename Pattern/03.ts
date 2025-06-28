const printTriangle = (num: number) => {
  for (let row = 1; row <= num; row++) {
    let star = "";
    for (let cst = 1; cst <= row; cst++) {
      star += "*";
    }

    console.log(star);
  }
};

printTriangle(6);
