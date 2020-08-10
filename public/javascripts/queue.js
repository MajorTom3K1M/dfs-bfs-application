class Queue {
    constructor(element) {
        if (element instanceof Array) {
            this.items = element;
        } else {
            this.items = [];
        }
        this.length = this.items.length;
    }

    enqueue(element) {
        this.length += 1;
        return this.items.push(element);
    }

    dequeue() {
        if (this.length > 0) {
            this.length -= 1;
        }
        return this.items.shift();
    }
}

export default Queue;