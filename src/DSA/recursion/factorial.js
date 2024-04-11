//for loop to calculate factorial of a number
// Time Complexity: O(n) because the code is running through all values of n
// Space Complexity: O(1) because we are allocating only one extra space for number variable
function factorial(n){
  let number = 1
//   if(n === 1){
//     return 1
//   }

  for(let i = n; i>0; --i){
    number*=i
  }

  return number
}

// recursion function to calculate factorial of a number
// Time Complexity: O(n) because the code is running through all values of n
// Space Complexity: O(n) because the stack is being created for each function call
function recursion_factorial(n){
  if(n===1){
    return 1
  }

  return n * recursion_factorial(n-1)
}
console.log(factorial(4))

function printStars(n){
  if(n > 0){
    //console.log("*" + printStars(n - 1)) 
    // printStars(4) = * + printStars(3) // ****
    // printStars(3) = * + printStars(2) // ***
    // printStars(2) = * + printStars(1) // **
    // printStars(1) = * + printStars(0) // *
    // printStars(0) = ''
    return "*" + printStars(n - 1)
  } else {
    return ''
  }
}

function print_stars(n){
  for(let i = n; i > 0; i--){
    console.log("*".repeat(i))
    //return "*".repeat(i)
  }
  for( let j = 1; j <= n; j++){
    console.log("*".repeat(j))
    //return "*".repeat(j)
  }
}

// function seriesOfStars(n){
// if(n <= 0){
//   return ''
// } else {
//   console.log("*".repeat(n))
//   return seriesOfStars(n - 1)
// }
  
  
// }

//print_stars(4)

function recursiveStringReverse(string){
  if(string.length<=1){
    return string
  }

  let firstCharacter = string.charAt(0)
  let lastCharacters = string.slice(1)
  return recursiveStringReverse(lastCharacters) + firstCharacter
}

console.log(recursiveStringReverse('Paul'))