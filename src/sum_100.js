/*
1/2(N+1) * N
*/
function sumHundred(n){
  let sum = 0
  for(let i = 1; i <= n; i++){
    if (i <= n){
      sum += i
    }
  }
  return sum
}

console.log(sumHundred(100))