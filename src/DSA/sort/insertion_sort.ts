const insertionSort = (arr: number[]): Array<number> => {
  for (let i = 1; i < arr.length; i++) {
    let unsorted_element = arr[i]; //current unsorted element
    let j = i - 1; //sorted element
    while (j >= 0 && arr[j] > unsorted_element) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = unsorted_element;
  }
  return arr;
}

console.log(insertionSort([4, 2, 3, 5, 10, 1, 7]));