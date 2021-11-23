class DynamicArray {

  constructor(capacity) {
    this.capacity = capacity || 4;
    this.data = new Array(this.capacity);
    this.length = 0;
  }

  read(index) {
    if (index > this.length) return undefined;
    return this.data[index];
  }

  unshift(val) {
    if (this.length === this.capacity) this.resize();
    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length += 1;
    return this.length;
  }

  push(val) {
    if (this.length === this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++;
    return this.length;
  }


  pop() {
    let popped = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return popped;
  }

  shift() {
    let shifted = this.data[0];
    for (let i = 0; i < this.length - 1; i++){
      this.data[i] = this.data[i + 1];
    }
    this.length--;
    return shifted;
  }

  indexOf (val) {
    for (let i = 0; i < this.length; i++){
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize () {
  this.capacity *= 2;
  }
}


module.exports = DynamicArray;
