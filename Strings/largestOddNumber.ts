const largestOddNumber = (s: string): string => {
  for (let i = s.length - 1; i >= 0; i--) {
    if (parseInt(s[i]) % 2 !== 0) {
      return s.substring(0, i + 1);
    }
  }

  return "";
};

console.log(largestOddNumber("35427"));
