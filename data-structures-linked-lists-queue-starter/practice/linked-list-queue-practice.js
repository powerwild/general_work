// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        return this.length;
        // let count = 0;
        // let node = this.head;
        // while (node) {
        //     count++;
        //     node = node.next;
        // }
        // return count;
    }

    sumOfNodes() {
        let total = 0;
        let node = this.head;
        while (node) {
            total += node.value;
            node = node.next;
        }
        return total;
    }

    averageValue() {
        return this.sumOfNodes() / this.length;
    }

    findNthNode(n) {
        let total = 0;
        let node = this.head;
        while (node) {
            if (total === n) return node;
            total++;
            node = node.next;

        }
        return 'Does not contain that many nodes.'
    }

    findMid() {
        let total = 0;
        let node = this.head;
        if (this.length % 2 === 0) total++;
        while (node) {
            if (total === Math.floor(this.length / 2)) {
                return node;
            }
            total++;
            node = node.next;
        }
    }

    reverse() {

    }

    reverseInPlace() {
        let newTail = this.head;
        let previous;
        let curr = this.head;
        while (curr.next){
            previous = curr;
            
        }
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}
const list = new SinglyLinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
list.addToTail(6);

list.reverseInPlace();
module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
