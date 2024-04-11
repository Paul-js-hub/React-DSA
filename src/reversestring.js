function reverseString(s){
  let end = Math.floor((s.length - 1) / 2)
  for(let i = 0; i <= end; i++){
    let start = s[i];
    s[i] = s[s.length - 1 - i]
    s[s.length - 1 - i] = start
  }

  return s
}

console.log(reverseString(['p', 'a', 'u', 'l', 'o']))