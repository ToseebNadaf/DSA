const printStars = (num: number) => {
  let stars = 1;
  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let cst = 1; cst <= stars; cst++) {
      line += "*";
    }

    console.log(line);

    if (row <= num / 2) {
      stars++;
    } else {
      stars--;
    }
  }
};

printStars(7);
