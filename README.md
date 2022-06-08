# **Deque**

Deque provides a simple, JavaScript-native implementation of the double-ended queue (deque) data structure.

## **Installation**

Using npm:

```shell
$ npm install @bletchley-tech/deque
```

## **Usage**

Deque provides a JavaScript-native implementation of the double-ended queue (deque) data structure designed for use in a synchronous Node.js environment.

The package provides a single class, Deque, which is a simple deque data structure. To use it, follow the steps below:

1) Import/Require the package:

    ```javascript
    // CommonJS
    const Deque = require('@bletchley-tech/deque');

    // ES6+
    import Deque from '@bletchley-tech/deque';
    ```

    This will load the Deque class into the global scope and allow you to create new instances of Deque.

2) Create a new instance of Deque:

    ```javascript
    const deque = new Deque();
    ```

    This will create a new instance of Deque and store it in the deque variable.

3) Use the queue:

    ```javascript
    deque.enqueueFront('a'); // Enqueue 'a' to the front
    deque.enqueueBack('b'); // Enqueue 'b' to the back
    deque.deque; // "a - b"
    ```

    This will enqueue 'a' to the front of the queue, enqueue 'b' to the back of the queue, and then print the deque.

## **Deque Class**

The Deque class has only one property, deque, which is an array of values. The specific functionality of the Deque data structure is provided through class methods.

The Deque class takes advantage of the new private class properties/methods JavaScript feature introduced in ES2022. This means that once the Deque is initialized, it will not be able to be changed except by the class' own methods.

### **Class Methods**

#### *enqueueFront(value)*

The enqueueFront method adds a value to the front of the queue.

```javascript
deque.enqueueFront('a'); // Enqueue 'a' to the front
```

#### *enqueueBack(value)*

The enqueueBack method adds a value to the back of the queue.

```javascript
deque.enqueueBack('b'); // Enqueue 'b' to the back
```

#### *enqueueMultipleFront(values)*

The enqueueMultipleFront method adds multiple values to the front of the queue.

```javascript
deque.enqueueMultipleFront('a', 'b'); // Enqueue 'a' and 'b' to the front

// or

deque.enqueueMultipleFront(['a', 'b']); // Enqueue 'a' and 'b' to the front
```

#### *enqueueMultipleBack(values)*

The enqueueMultipleBack method adds multiple values to the back of the queue.

```javascript
deque.enqueueMultipleBack('a', 'b'); // Enqueue 'a' and 'b' to the back

// or

deque.enqueueMultipleBack(['a', 'b']); // Enqueue 'a' and 'b' to the back
```

#### *dequeueFront()*

The dequeueFront method removes the front value from the queue.

```javascript
deque.dequeueFront(); // Dequeue 'a' from the front
```

#### *dequeueBack()*

The dequeueBack method removes the back value from the queue.

```javascript
deque.dequeueBack(); // Dequeue 'b' from the back
```

### **Class Attributes**

#### *size*

```javascript
deque.size; // 4
```

This will return the size of the deque.

#### *isEmpty*

```javascript
deque.isEmpty; // false
```

This will return true if the deque is empty, false otherwise.

#### *front*

```javascript
deque.front; // 'a'
```

This will return the front value of the deque.

#### *back*

```javascript
deque.back; // 'a'
```

This will return the back value of the deque.

#### *deque*

```javascript
deque.deque; // 'a - a - b - a'
```

This will return the deque as a string.

## **License**

Deque is licensed under the MIT License (see the [LICENSE](LICENSE) file for more information).