"use strict";
module.exports =  class Node {
 constructor(data) {
   this.data = data;
   this.nextElement = null;
  }
}

/**
Explanation
That was much simpler than the delete at the tail operation of a singly linked list. The only thing we need to be concerned with is proper pointer updates. Let’s follow along the solution to make more sense of it.

First, we handle the base case when the list is empty. We do not need anything in this case, so we simply return. (lines 12-13)

Now we move to the more general case. We get the last node in the list through the tail pointer. Then we simply update the tail to point at the last node’s previous node (line 18). Lastly, we also update the second last (stored in the tail in line 23) pointer’s nextElement pointer to point at null.

Also, check for the corner case when deleting the tail empties the linked list. In this case, we also need to update the head pointer to point at null (lines19-20).

 */