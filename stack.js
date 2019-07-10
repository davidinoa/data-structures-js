class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(value) {
    this.storage[this.size] = value;
    this.size++;
  }

  pop() {
    this.size && this.size--;
    const result = this.storage[this.size];
    delete this.storage[this.size];
    return result;
  }
}
