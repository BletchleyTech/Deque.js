module.exports = class Deque {
    #deque;
    constructor() {
        this.#deque = [];
    }
    get front() {
        return this.#getFront();
    }
    get back() {
        return this.#getBack();
    }
    get size() {
        return this.#deque.length;
    }
    get isEmpty() {
        return this.#deque.length === 0;
    }
    get deque() {
        return this.#deque.join(" - ");
    }
    enqueueFront(element) {
        this.#deque.unshift(element);
    }
    enqueueBack(element) {
        this.#deque.push(element);
    }
    enqueueMultipleFront(...elements) {
        elements.flat().forEach(element => this.enqueueFront(element));
    }
    enqueueMultipleBack(...elements) {
        elements.flat().forEach(element => this.enqueueBack(element));
    }
    dequeueFront() {
        if (this.isEmpty) return "Underflow";
        return this.#deque.shift();
    }
    dequeueBack() {
        if (this.isEmpty) return "Underflow";
        return this.#deque.pop();
    }
    #getFront() {
        return this.#deque[0];
    }
    #getBack() {
        return this.#deque[this.#deque.length - 1];
    }
}