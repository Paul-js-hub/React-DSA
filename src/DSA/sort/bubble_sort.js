function bubble_sort(array){
  //Traverse through all array elements
  for(let i = 0; i < array.length - 1; ++i){
    let swapped = false
    //Last array element is already sorted so we don't need to check it
    for(let j = 0; j < array.length - 1 - i; ++j){
      //Swap if the element found (present element) is greater than the next element
        if(array[j] > array[j + 1]){
            let temp = array[j]
            array[j] = array[j + 1]
            array[j+ 1] = temp
            swapped = true
        }
    }
    if(swapped == false) break;
  }
  return array
}

// [1, 2, 7, 4, 5]
// [1, 3, 7, 8, 12]

console.log(bubble_sort([1, 2, 7, 4, 5]))