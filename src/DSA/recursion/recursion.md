## The Call Stack
Is a stack that mainly purposes to organize multiple set of instructions (functions) and how to execute them (keep track of their execution)

## How it works (nested functions)
When you call a function, the computer creates a box/chunk of memory for that function call
If that function had an argument like *name* andd you pass a string name like *Paul* to it the following happens:
 - The memory that was allocated needs to be used
 - The variable *name* is assigned the value *Paul*
 - All this is saved in memory

Now everytime you make a function call, the computer saves the values for all the variables for that call in memory.

Let assume you call the second function. The following happens:
- This second function also a chunk of memory is allocated to it on top of the first function call.
- The second function is executed and removed from the call stack.

When you called the second function function, the first function was **partially completed**.
Now this is the big deal in recursion. *When you call a function from another function, the calling function is paused in a partially completed state*.
All the values of the variables for that function are still stored in memory.
When the second function is popped of the first function (calling function) becomes active again.