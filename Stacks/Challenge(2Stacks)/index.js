/** Stacks on opposite ends */

class twoStacks {
    constructor(s) {
        this.arr = [];
        this.top1 = -1;
        this.top2 = s;
        this.size = s;
    }
    
    push1(value) {
        if (this.top1 < this.top2 - 1) {
            this.top1 += 1
            this.arr[this.top1] = value;
        }
        
    }
    push2(value) {
        if (this.top1 < this.top2 - 1) {
            this.top2 -= 1 
            this.arr[this.top2] = value
        }
        
    }
    
    pop1() {
        if (this.top1 >= 0) {
            let value = this.arr[this.top1];
            this.top1 -= 1
            return value;
        } else {
            return -1;
        }
        
    }
    
    pop2() {
        if (this.top2 < this.size) {
            let val = this.arr[this.top2]
            this.top2 += 1
            return val
        } else {
            return -1;
        }
        
    }
    
}

var stack = new twoStacks(10) 
stack.push1(20)
stack.push2(10)
stack.push1(30)
stack.push2(40)
stack.push1(60)
stack.push2(50)
 /**
This implementation is space-efficient as it utilizes all of the available space. It doesn’t cause an overflow if there is any space available in the array. The tops of the two stacks are the two extreme ends of the array. The first stack starts from the first element at index 0, and the second starts from the last element. The first element in stack2 is pushed at index (this.top2 - 1) where top2 is equal to arr.length for the push of the first element. Both stacks grow (or shrink) in the opposite direction.

To check for overflow, all we need to do is check for space between the top elements of both stacks as reflected in the code. */