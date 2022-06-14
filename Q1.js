function customCalc() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}

customCalc(4, 7, 32, 6, 3, 6, 22, 44);
