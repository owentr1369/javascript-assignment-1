const array = [2,7,33,64,4];
// Output: [7, 33, 64]
const afterFilted = [];

function customFilter(array, callback) {
  for (let i = 1; i < array.length; i++) {
    callback(array[i], i);
  }
  console.log(afterFilted);
}

function callbackFilter(value, index) {
  if (value > 5) {
    afterFilted.push(array[index]);
  }
}

customFilter(array, callbackFilter);