function binarySearch(array, target) {
  //[1, 2, 3, 4, 5]
  let low = 0;
  let high = array.length;
  let mid;
  while (low < high) {
    mid = low + Math.floor((high - low) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return -1;
}
function binary_search(array, target) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = array[mid];
    if (guess === target) {
      return mid;
    } else if (guess < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return "Not Found";
}
console.log(binarySearch([1, 2, 3, 4, 5], 1));
