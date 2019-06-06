class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        if (val < this.value) {
            if (this.left === null) {
                this.left = new BinarySearchTree(val);
            } else {
                this.left.insert(val);
            }
        } else if (val > this.value) {
            if (this.right === null) {
                this.right = new BinarySearchTree(val);
            } else {
                this.right.insert(val);
            }
        }
    }

    contains(val) {
        if (val === this.value) {
            return true;
        } else if (val < this.value) {
            return !!(this.left && this.left.contains(val));
        } else if (val > this.value) {
            return !!(this.right && this.right.contains(val));
        }
    }
}
