class LinkedListNode {
    constructor(value, next, previous) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }

  }
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head.previous = newNode;
        this.head = newNode;
        if (!this.tail) this.tail = this.head;
      }
      print() {
        let node = this.head;

        while (node) {
          process.stdout.write(`${node.value} -> `);
          node = node.next;
        }

        console.log("NULL");
      }
      addToTail(value) {
          const newNode = new LinkedListNode(value, null, this.tail);
          this.tail = newNode;
          if(!this.head) this.head = this.tail;
      }
      removeFromHead() {
          if (!this.head.next) this.tail = null;
          this.head = this.head.next;
      }
      removeFromTail() {
        if (!this.tail.previous) this.head = null;
        this.tail = this.tail.previous;
      }
}


class Queue {

    constructor() {
      this.linkedList = new LinkedList();
    }

    enqueue(value) {
      this.linkedList.addToTail(value);
    }

    dequeue() {
      const value = this.linkedList.head.value;
      this.linkedList.removeFromHead();

      return value;
    }

  }
q = new Queue();
n = 100000

enqueueStartTime = Date.now();
for (let i = 0 ; i < n ; i++) {
  q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0 ; i < n ; i++) {
  q.dequeue();
}
dequeueEndTime = Date.now();

console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);
