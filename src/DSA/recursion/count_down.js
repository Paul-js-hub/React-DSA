//#1 Write a normal function that prints a countdown like 3 -> 2 -> 1 -> 0
/* function count_down(n){
  for(let i = n; i >= 0; --i){
    console.log(i)
  }
} */

//#2 Write a recursive function that prints a countdown like 3 -> 2 -> 1 -> 0

function countDown(n){
console.log(n)
  if(n <= 0){
    return
  }
  countDown(n - 1)
}

console.log(countDown(3))