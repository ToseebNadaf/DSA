const removeOuterParentheses = (s: string): string => {
  let length = s.length;
  let result = "";
  let balance = 0;

  for (let i = 0; i < length; i++) {
    if (s[i] == "(") {
      if (balance > 0) result += s[i];
      balance++;
    } else {
      balance--;
      if (balance > 0) result += s[i];
    }
  }

  return result;
};

console.log(removeOuterParentheses("(()())(())"));
