// Node class is implemented for you, no need to look for bugs here!
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
        this.length = 0;
    }

    addToHead(val) {
        let node = new DoublyLinkedNode(val);

        if (this.tail) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this.length++;
    }

    addToTail(val) {
        const node = new DoublyLinkedNode(val);
        if (!this.length){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    removeFromHead() {
        if (!this.head) return undefined;
        let bad = this.head;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        this.length--;
        return bad.value;
    }

    removeFromTail() {
        if (!this.head) return undefined;
        let badTail = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) this.tail.next = null;
        this.length--;
        return badTail.value;
    }

    peekAtHead() {
        if (!this.head) return undefined;
        return this.head.value;
    }

    peekAtTail() {
        if(!this.head) return undefined;
        return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
