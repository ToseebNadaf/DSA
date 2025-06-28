const printStars = (num: number) => {
  let stars = 1;
  let spaces = num - 2;

  for (let row = 1; row <= num; row++) {
    let line = "";
    for (let cst = 1; cst <= stars; cst++) {
      line += "*";
    }

    for (let csp = 1; csp <= spaces; csp++) {
      line += " ";
    }

    let sstars = stars;
    if (row === Math.ceil(num / 2)) {
      sstars = stars - 1;
    }
    for (let cst = 1; cst <= sstars; cst++) {
      line += "*";
    }

    console.log(line);

    if (row < num / 2) {
      stars++;
      spaces -= 2;
    } else {
      stars--;
      spaces += 2;
    }
  }
};

printStars(7);
