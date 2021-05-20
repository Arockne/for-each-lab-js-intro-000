function iterativeLog(array) {
  array.forEach((element, index) => console.log(`${index}: ${element}asd`));
}

function iterate(callback) {
  let array = [1, 2, 3];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}