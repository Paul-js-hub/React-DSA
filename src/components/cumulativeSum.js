function cumulative_sum(list) {
    let output = [];
    for (let i = 0; i < list.length; i++) {
      if (i === 0) {
        output.push(list[i]);
      } else {
        output.push(list[i] + output[i - 1]);
      }
    }
    return output;
  }
  
console.log(cumulative_sum([1, 2, 3]));