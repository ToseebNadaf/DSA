const printTriangle = (num: number) => {
  let spaces = num - 1;
  let stars = 1;

  for (let row = 1; row <= num; row++) {
    let line = "";

    for (let i = 1; i <= spaces; i++) {
      line += " ";
    }

    for (let j = 1; j <= stars; j++) {
      line += "*";
    }

    console.log(line);
    spaces--;
    stars += 2;
  }
};

printTriangle(6);
