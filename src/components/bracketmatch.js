function bracketMatch(stringBracket){
    let count = 0;
    let stack = [];
    for(let i = 0; i < stringBracket.length; i++){
        if(stringBracket[i] === '('){
            stack.push(stringBracket[i])
        } else if(stringBracket[i] === ')'){
            if(stack.length === 0){
                count++
            } else {
                stack.pop()
            }
        }    
    }
    return count += stack.length
}
  
console.log(bracketMatch("(())"))