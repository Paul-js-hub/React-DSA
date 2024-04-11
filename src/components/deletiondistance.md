The deletion distance between two srings is the minimum number of characters that you need to delete in the two strings in order to have the same string. The deletion distance between "cat" and "at" is 1, because you can just delete the first character of cat. The deletion distance between "cat" and "bat" is 2 because you need to delete the first character of both words. Of course, the deletion distance two strings can't be greater than the sum of their lengths, because you can always just delete both of the strings entirely.

Implement an efficient function to find the deletion distance between two strings. 

You can refer to the Wikipedia article on the algorithm for edit distance if you want to. The algorithm here is not quite the same as the algorithm required here, but involves the similar ideas.

e.g boat and got = 3
thought and sloughs = 6