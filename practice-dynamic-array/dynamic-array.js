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
    for (let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length += 1;
  }

}


module.exports = DynamicArray;
