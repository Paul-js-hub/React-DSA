function reverseString(string){
  let end = Math.floor((string.length - 1) / 2)
  for(let i = 0; i <= end; i++){
    let start = string[i];
    string[i] = string[string.length - 1 - i]
    string[string.length - 1 - i] = start
  }

  return s
}

console.log(reverseString(['p', 'a', 'u', 'l']))