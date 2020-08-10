class Stack {
    constructor() {
        this.items = [];
        this.length = this.items.length;
    }

    push(element) {
        this.length += 1;
        return this.items.push(element);
    }

    pop() {
        if (this.length > 0) {
            this.length -= 1;
        }
        return this.items.pop();
    }

    top() {
        if (this.length > 0) {
            return this.items[this.length - 1];
        }
        return undefined;
    }
}

export default Stack;