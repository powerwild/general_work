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
  }

  dequeue() {
    if (!this.head) {
      return null;
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
    this.numList = [];
    
    this.allowedNums = [];
    this.maxNums = maxNums;
  }
  // Add a number to the list of allowed numbers
  // Should not have any duplicates in allowedNums
  addAllowedNum(num) {
    if (!this.allowedNums.includes(num)) {
    this.allowedNums.push(num);
    return `${num} added to allowedNums`;
    } else {
    return `${num} already in allowedNums`;
    }
  }

  // Returns the count of nums in numList
  numCount() {
    let count = 0;
    while (this.numList[count] !== undefined) {
    count++;
    }
    return count;
  }
  // Returns true if the number is allowed, false otherwise
  isNumAllowed(num) {
    return this.allowedNums.includes(num);
  }
  // Build a numlist of integers from 0 to amount.
  // Only include allowed numbers
  buildNumList(amount) {
    this.numList = [];
    for (let i = 0; i <= amount; i++) {
    if (this.isNumAllowed(i)) {
    this.numList.push(i);
    return `{i} added to numList`;
    }
    return `${i} is not an allowed number`;
    }
  }
  // Remove and return the first number in the numList
  // If numList is empty, return undefined
  getFirstNum() {
    if(this.numList.length > 0){
    return this.numList.shift();
    } else {
    return undefined;
    }
  }
  // Add a new number to the back of the numList
  addNumToBack(num) {
    if (this.isNumAllowed(num)) this.numList.push(num);
    return this.numList[this.numList.length - 1];
  }
}
module.exports = { NumSorter, LinkedList };

const newNumSort = new NumSorter(3);
newNumSort.addAllowedNum(0);
newNumSort.addAllowedNum(1);
newNumSort.addAllowedNum(2);
console.log(newNumSort.buildNumList(3));