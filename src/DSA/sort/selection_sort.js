/* 
Algorithm for selection sort
*Set the first element from the unsorted list as the minimum
*Compare the minimum with the second element
*For each of the unsorted elements
if element < minimum
 set element as new minimum
Swap minimum with first unsorted position
*/

function selection_sort(array) {
  //repeat(array.length - 1) times
  for (let i = 0; i < array.length - 1; i++) {
    let minimum_index = i; //4
    for (let j = i + 1; j < array.length; j++) {
      //compare two elements in the unsorted list to find the smallest element
      if (array[j] < array[minimum_index]) {
        minimum_index = j; //4
      }
    }
    //swap minimum element with the first unsorted element
    let temp = array[i]; //i = 0
    array[i] = array[minimum_index]; //i = 4
    array[minimum_index] = temp;
  }
  return array;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimum_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum_idx]) {
        minimum_idx = j;
      }
    }
    if (minimum_idx != i) {
      let temp = arr[minimum_idx]; //temp = 4
      arr[minimum_idx] = arr[i]; //arr[0] = arr[1] 2
      arr[i] = temp; //arr[1] = 4
    }
  }
  return arr;
}

console.log(selectionSort([4, 2, 3, 5, 10, 1, 7]));

console.log(selection_sort([20, 12, 10, 15, 2]));
