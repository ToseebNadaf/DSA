const rotateString = (s: string, g: string): boolean => {
  if (s.length !== g.length) return false;

  return (s + s).includes(g);
};

console.log(rotateString("abcde", "cdeab"));
