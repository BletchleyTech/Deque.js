export default class Deque {
	#deque;
	#type;
	constructor(deque) {
		this.#deque = deque ? deque.#deque : [];
		this.#type = deque ? deque.#type : "";
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
		return this.#toString();
	}
	get type() {
		return this.#type;
	}
	enqueueFront(element) {
		if (this.isEmpty && !this.#type) this.#type = typeof element;
		if (typeof element !== this.#type) throw new Error("Invalid type");
		this.#deque.unshift(element);
	}
	enqueueBack(element) {
		if (this.isEmpty && !this.#type) this.#type = typeof element;
		if (typeof element !== this.#type) throw new Error("Invalid type");
		this.#deque.push(element);
	}
	enqueueManyFront(...elements) {
		elements.forEach((element) => this.enqueueFront(element));
	}
	enqueueManyBack(...elements) {
		elements.forEach((element) => this.enqueueBack(element));
	}
	dequeueFront() {
		if (this.isEmpty) throw new Error("Underflow");
		return this.#deque.shift();
	}
	dequeueBack() {
		if (this.isEmpty) throw new Error("Underflow");
		return this.#deque.pop();
	}
	#getFront() {
		return this.#deque[0];
	}
	#getBack() {
		return this.#deque[this.#deque.length - 1];
	}
	#toString() {
		return this.#deque.join(" - ");
	}
}
