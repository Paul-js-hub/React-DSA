// O(N^2)
function targetSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }

  return [];
}

// Two pointer
// Time Complexity O(N) - Even in the worst case we visit all the elements in the array once
// Space complexity O(1) - Only constant space for variables is used
function targetSum(nums, target) {
  let left = 0,
    right = nums.length - 1,
    tempSum;
  while (left < right) {
    tempSum = nums[left] + nums[right];
    if (tempSum == target) {
      return [left, right];
    } else if (tempSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

console.log(targetSum([3, 2, 3], 6));
