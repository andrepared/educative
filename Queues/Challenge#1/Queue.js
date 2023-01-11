
module.exports = class Queue {
    constructor() {
        this.items = new DoublyLinkedList();
    }
    isEmpty() {
        return this.items.length == 0;
    }
    getFront() {
        if (!(this.isEmpty())) {
            return this.items.getHead();
        } else
            return null;
    }
    size() {
        return this.items.length;
    }
    enqueue(element) {
        return this.items.inserttTail(element);
    }
    dequeue() {
        return this.items.removezhead();

    }

}