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
//  Output: {avg: 33.75, max: 232, min: 1, sum: 405}

customCalc(4, 7, 32, 6, 3, 6, 22, 44);
//  Output: {max: 44, min: 3, avg: 15.5, sum: 124}