const array = [1, 2, 3, 2, 5, 7, 8, 6, 6, 8, 8, 11, 52];
const afterFilted = [];

function customFilter(array, callback) {
  callback(array);
}

function callbackFilter(array, index) {
  for (index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      afterFilted.push(array[index]);
    }
  }
  console.log(afterFilted);
}

customFilter(array, callbackFilter);
