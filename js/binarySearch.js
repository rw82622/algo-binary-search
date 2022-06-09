function binarySearch(num, arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (num === arr[mid]) {
      return mid;
    } else if (num < arr[mid]) {
      end = mid - 1;
    } else if (num > arr[mid]) {
      start = mid + 1;
    }
  }
  return -1;
}

var smallArray = [1, 2, 3, 4, 5];
var largeArray = [1, 5, 7, 2, 3, 8, 4, 9];
largeArray.sort();

console.log(binarySearch(1, smallArray) === 0);
console.log(binarySearch(2, smallArray) === 1);
console.log(binarySearch(3, smallArray) === 2);
console.log(binarySearch(4, smallArray) === 3);
console.log(binarySearch(5, smallArray) === 4);
console.log(binarySearch(7, largeArray) === 5);
