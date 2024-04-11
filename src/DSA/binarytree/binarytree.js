// breadth first search
class Node {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')

const a = new Node(3)
const b = new Node(2)
const c = new Node(7)
const d = new Node(4)
const e = new Node(-2)
const f = new Node(5)

//      a
//     /  \
//    b    c
//   / \    \
//  d   e    f

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

// Breadth-First Traversal ---> Queue
// Remove always from the front and add items to the back of the queue

const breadFirstPrint = (root) => {
  const queue = [root]
  while(queue.length > 0){
    const curr = queue.shift()
    console.log(curr.val)
    if(curr.left !== null){
        queue.push(curr.left)
    }
    if(curr.right !== null){
        queue.push(curr.right)
    }
  }
}

// breadFirstPrint(a)

// Write a function, bfs(root, target), that takes in the root of a binary tree and a target value as arguments
// The function should return a boolean indicating whether or not the tree contains the target value.
// e.g bfs(a, 'e') ---> true
// e.g bfs(a, 'z') ---> false

const bfs = (root, target) => {
  const queue = [root]
  while(queue.length > 0){
    const curr = queue.shift()
    if(curr.val === target){
        return true
    }
    if(curr.left !== null){
        queue.push(curr.left)
    }
    if(curr.right !== null){
        queue.push(curr.right)
    }
  }

  return false
}

// console.log(bfs(a, 'e'))
// console.log(bfs(a, 'k'))


// Write a function, bfs(root, target), that takes in the root of a binary tree and a target value as arguments
// The function should return the total sum of all values in the tree. You can assume that the tree only 
// contains number values

//      3
//     /  \
//    2    7
//   / \    \
//  4   -2    5

const sumTree = (root) => {
    const queue = [root]
    let sum = 0
    while(queue.length > 0){
      const curr = queue.shift()
      sum += curr.val
      if(curr.left !== null){
          queue.push(curr.left)
      }
      if(curr.right !== null){
          queue.push(curr.right)
      }
    }
  return sum
}

console.log(sumTree(a))

// Time complexity O(n)
