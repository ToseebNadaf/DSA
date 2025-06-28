const printStars = (num: number) => {
  let stars = 1;
  let spaces = num / 2;

  for (let row = 1; row <= num; row++) {
    let line = "";

    for (let csp = 1; csp <= spaces; csp++) {
      line += " ";
    }

    for (let cst = 1; cst <= stars; cst++) {
      line += "*";
    }

    console.log(line);

    if (row < num / 2) {
      spaces -= 1;
      stars += 2;
    } else {
      spaces += 1;
      stars -= 2;
    }
  }
};

printStars(7);
