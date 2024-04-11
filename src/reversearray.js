// [1, 2, 3]
// [3, 2, 1]
function reverseArray(nums){
    let end = Math.floor((nums.length - 1) / 2)
    for(let i = 0; i <= end; i++){
        let start = nums[i]
        nums[i] = nums[nums.length - 1 - i]
        nums[nums.length - 1 - i] = start
    }

    return nums
}

// let array = [1, 2, 3]
// console.log(array.reverse())

function reverse_array(array){
    //let arr = []
    // for(let i = array.length - 1; i >= 0; i--){
    //     arr.push(array[i])
    // }

    // for(let i = 0; i < array.length; i++){
    //     arr.unshift(array[i])
    // }

    // return arr

    return array.reduce((acc, curr) => {
        acc.unshift(curr)
        return acc
    }, [])
}

console.log(reverse_array([1, 2, 3, 4, 5, 6]))