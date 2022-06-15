const array = [1, 10, 2, 3, 2, 5, 7, 8, 6, 6, 8, 8, 11, 52];
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
