class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this.tail.value;
  }

  dequeue() {
    if (!this.head) {
      return undefined;
    }

    const returnValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return returnValue;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
class NumSorter {
  constructor(maxNums) {
    this.numList = new LinkedList();
    this.allowedNums = new Set();
    this.maxNums = maxNums;
  }
  // Add a number to the list of allowed numbers
  // Should not have any duplicates in allowedNums
  addAllowedNum(num) {
    if (!this.allowedNums.has(num)) {
    this.allowedNums.add(num);
    return `${num} added to allowedNums`;
    } else {
    return `${num} already in allowedNums`;
    }
  }

  // Returns the count of nums in numList
  numCount() {
    return this.numList.length;
  }
  // Returns true if the number is allowed, false otherwise
  isNumAllowed(num) {
    return this.allowedNums.has(num);
  }
  // Build a numlist of integers from 0 to amount.
  // Only include allowed numbers
  buildNumList(amount) {
    for (let i = 0; i <= amount; i++) {
    if (this.isNumAllowed(i)) {
    this.numList.enqueue(i);
    }
  }
  return this.numList.length;
  }
  // Remove and return the first number in the numList
  // If numList is empty, return undefined
  getFirstNum() {
    return this.numList.dequeue();
  }
  // Add a new number to the back of the numList
  addNumToBack(num) {
    return this.numList.enqueue(num);
  }
}
module.exports = { NumSorter, LinkedList };

const newNumSort = new NumSorter(3);
newNumSort.addAllowedNum(0);
newNumSort.addAllowedNum(1);
newNumSort.addAllowedNum(2);
console.log(newNumSort.buildNumList(3));
