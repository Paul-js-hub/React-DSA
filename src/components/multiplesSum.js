function computeMultiplesSum(n) {
    let multiplesArray = [];
    for (let i = 3; i < n; i++) { 
      if ((i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0)) {
        multiplesArray.push(i);
      } 
    }
  
  let total = multiplesArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
  }); 
    
    return total
  }
  console.log(computeMultiplesSum(11))

// Time complexity O(n)