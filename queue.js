class Queue {
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    this.storage[this.end++] = value;
  }

  dequeue() {
    if (this.end - this.start) {
      const output = this.storage[this.start];
      delete this.storage[this.start++];
      return output;
    }
  }
}
