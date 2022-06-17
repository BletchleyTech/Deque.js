export default class Deque<T> {
	#deque: Array<T>;
	#type: string;
	constructor(deque?: Deque<T>) {
		this.#deque = deque ? deque.#deque : [];
		this.#type = deque ? deque.#type : "";
	}
	get front(): T {
		return this.#getFront();
	}
	get back(): T {
		return this.#getBack();
	}
	get size(): number {
		return this.#deque.length;
	}
	get isEmpty(): boolean {
		return this.#deque.length === 0;
	}
	get deque(): string {
		return this.#toString();
	}
	get type(): string {
		return this.#type;
	}
	enqueueFront(element: T): void {
		if (this.isEmpty && !this.#type) this.#type = typeof element;
		if (typeof element !== this.#type) throw new Error("Invalid type");
		this.#deque.unshift(element);
	}
	enqueueBack(element: T): void {
		if (this.isEmpty && !this.#type) this.#type = typeof element;
		if (typeof element !== this.#type) throw new Error("Invalid type");
		this.#deque.push(element);
	}
	enqueueManyFront(...elements: Array<T>): void {
		elements.forEach(element => this.enqueueFront(element));
	}
	enqueueManyBack(...elements: Array<T>): void {
		elements.forEach(element => this.enqueueBack(element));
	}
	dequeueFront(): T {
		if (this.isEmpty) throw new Error("Underflow");
		return this.#deque.shift();
	}
	dequeueBack(): T {
		if (this.isEmpty) throw new Error("Underflow");
		return this.#deque.pop();
	}
	#getFront(): T {
		return this.#deque[0];
	}
	#getBack(): T {
		return this.#deque[this.#deque.length - 1];
	}
	#toString(): string {
		return this.#deque.join(" - ");
	}
}