class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(value) {
        const newTail = new Node(value);

        if (!this.head) {
            this.head = newTail;
        }

        if (this.tail) {
            this.tail.next = newTail;
        }

        this.tail = newTail;
    }

    removeHead() {
        if (!this.head) {
            return null;
        }

        const currentHead = this.head;
        this.head = this.head.next;
        
        return currentHead.value;
    }

    contains(target) {
        let currentNode = this.head;

        while(currentNode) {
            if (currentNode.value === target) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}