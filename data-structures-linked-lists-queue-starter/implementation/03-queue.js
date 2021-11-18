const { SinglyLinkedNode, SinglyLinkedList } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let node = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this.length;
    }

    dequeue() {
        if (!this.head) return null;
        let node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return node.value;
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
