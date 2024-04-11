## SELECTION SORT
- Selects the smallest in unsorted list in each iteration and places that element at the beginning of the unsorted list.
- After each iteration minimum is placed in the front of the unsorted list.
- For each iteration indexing starts from the first unsorted list

### Working with Selection sort
- Set/Select the first element as *minimum*
- Compare *minimum* with the second element. If the second element is smaller than *minimum*, assign the second element as *minimum*. Compare *minimum* with the third element. Again if the third element is smaller, then assign *minimum* to the third element otherwise do nothing. The process goes on until the last element.
- After each iteration, *minimum* is placed in the front of unsorted list. (Swap the first with minimum)
- For each iteration, indexing starts from the first unsorted element

//Pseudocode
- Loop through the unsorted array (repeat array.length - 1) times. Outer loop
- Select the first element as minimum
- Loop through the inner loop
- Compare the second element with the minimum. If the element is less than minimum, set the element as the new minimum
- Swap minimum with the first unsorted element

