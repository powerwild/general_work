class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }

  }
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    print() {
      let node = this.head;

      while (node) {
        process.stdout.write(`${node.value} -> `);
        node = node.next;
      }

      console.log("NULL");
    }
    addToHead(value) {
        const node = new Node(value);
        if (!this.tail) {
          this.tail = node;
          this.head = node;
        }
        else {
          this.head.previous = node;
          node.next = this.head;
          this.head = node;
        }
        this.length++;
      }
      addToTail(value) {
          const node = new Node(value);
          if (!this.head) {
            this.head = node;
            this.tail = node;
          }
          else {
          this.tail.next = node;
          node.previous = this.tail;
          this.tail = node;
          }
          this.length++;
        }
      removeFromHead() {
          if (!this.head.next) {
            this.tail = null;
            this.head = null;
          }
          else {
            this.head = this.head.next;
            this.head.previous = null;
          }
          this.length--;
        }
      removeFromTail() {
        if (!this.tail.previous) {
          this.head = null;
          this.tail = null;
        }
         else {
           this.tail = this.tail.previous;
           this.tail.next = null;
         }
          this.length--;
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
const dll = new LinkedList();
let n = 10000;
let a = Date.now();
for (let i = 1; i < n; i++){
  dll.addToHead(i);
}
let b = Date.now();
console.log(b - a);

for (let i = 1; i < n; i++){
  dll.removeFromHead();
}
let c = Date.now();
console.log(c - b);

for (let i = 1; i < n; i++){
  dll.addToTail(i);
}
let d = Date.now();
console.log(d - c);

for (let i = 1; i < n; i++){
  dll.removeFromTail();
}
let e = Date.now();
console.log(e - d);
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
