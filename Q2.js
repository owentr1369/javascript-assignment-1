const array = [1, 2, 3, 2, 5, 7, 8, 6, 6, 8, 8, 11, 52];

function customFilter(array, callback) {
  console.log(array);
  //   console.log("Hello");
  callback(123);
}

function callbackFilter(index) {
  console.log(index);
}

customFilter(array, callbackFilter);
