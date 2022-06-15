const quest1 = new Object();
function customCalc() {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    avg = sum / arguments.length;
  }
  quest1.max = Math.max(...arguments);
  quest1.min = Math.min(...arguments);
  quest1.avg = avg;
  quest1.sum = sum;
  console.log(quest1);
}

customCalc(1, 4, 5, 2, 5, 6, 7, 8, 4, 67, 232, 64);
