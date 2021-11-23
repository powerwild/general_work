// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const node = new SinglyLinkedNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
    }

    addToTail(val) {
        let node = new SinglyLinkedNode(val);
        this.length++;
        if (!this.head) {
            this.head = node;
            return this;
        }
        let curr = this.head;
        while (curr.next) {
        curr = curr.next;
        }
        curr.next = node;
        return this;
    }

    removeFromHead() {
        if (!this.head) return undefined;
        let node = this.head;
        this.head = this.head.next;
        this.length--;
        return node;
    }

    removeFromTail() {
        if (!this.head) return undefined;
        let curr = this.head;
        let prev;
        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        if (!prev) {
            this.head = null;
        } else {
            prev.next = null;
        }
        this.length--;
        return curr;
    }

    peekAtHead() {
        if (this.head) return this.head.value;
        else return undefined;
    }

    print() {
        if (!this.head) return;
        let node = this.head;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
        console.log('NULL');
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
