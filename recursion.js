//the function? wich counts factorial
var f = function fact(n) {
  if (n <= 1) {
    return n;
  } else {
    return n * fact(n - 1)
  }
};
