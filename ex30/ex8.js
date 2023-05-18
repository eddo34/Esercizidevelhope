function multiplyByTwo(value) {
  let number = 2;
  function inner(x) {
    return x*number;
  }
  console.log(inner(value));
};

multiplyByTwo(4);