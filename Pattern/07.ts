const printStars = (num: number) => {
  let firstStar = "";
  for (let row = 1; row <= 2 * num - 1; row++) {
    firstStar += "*";
  }
  console.log(firstStar);

  let trows = num - 1;
  let stars = num - 1;
  let spaces = 1;

  for (let row = 1; row <= trows; row++) {
    let line = "";
    for (let cst = 1; cst <= stars; cst++) {
      line += "*";
    }

    for (let csp = 1; csp <= spaces; csp++) {
      line += " ";
    }

    for (let cst = 1; cst <= stars; cst++) {
      line += "*";
    }

    console.log(line);
    stars--;
    spaces += 2;
  }
};

printStars(3);
