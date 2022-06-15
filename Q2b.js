const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Output: [0, 2, 4, 6, 8]
const afterFilted = [];

function customFilter(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
  console.log(afterFilted);
}

function callbackFilter(value, index) {
  if (value % 2 === 0) {
    afterFilted.push(array[index]);
  }
}

customFilter(array, callbackFilter);
