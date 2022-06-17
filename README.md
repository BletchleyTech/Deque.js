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
    // ES6+
    import Deque from '@bletchley-tech/deque';
    ```

    This will load the Deque class into the global scope and allow you to create new instances of Deque.

2) Create a new instance of Deque:

    ```javascript
    const deque = new Deque();
    ```

    This will create a new instance of Deque and store it in the deque variable.

3) Use the deque:

    ```javascript
    deque.enqueueFront('a'); // Enqueue 'a' to the front
    deque.enqueueBack('b'); // Enqueue 'b' to the back
    deque.deque; // "a - b"
    ```

    This will enqueue 'a' to the front of the deque, enqueue 'b' to the back of the deque, and then print the deque.

## **Deque Class**

The Deque class has only one property, deque, which is an array of values. The specific functionality of the Deque data structure is provided through class methods.

The Deque class takes advantage of the new private class properties/methods JavaScript feature introduced in ES2022. This means that once the Deque is initialized, it will not be able to be changed except by the class' own methods.

---

***Version 2.0.0 Update***

*For version 2.0.0, the Deque data structure was defined to only accept one data type within itself to enforce data consistency. This was done to prevent the Deque from being used to store mixed data types.*

---

#### **Constructor**

The Deque class has a constructor that takes either one or no arguments. 

If no arguments are passed, the constructor returns a new, empty Deque instance. 

If one argument is passed, the constructor acts as a copy constructor. This means the passed argument must be an instance of Deque, to be copied into a new instance which will be returned by the constructor.

```javascript
const Deque = new Deque(); // Create a new empty Deque
Deque.enqueueMany(5, 1, 9); // Enqueue 5, 1, 9

const Deque2 = new Deque(Deque); // Create a new Deque (Deque2) with the same values as Deque
```

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
```

#### *enqueueMultipleBack(values)*

The enqueueMultipleBack method adds multiple values to the back of the queue.

```javascript
deque.enqueueMultipleBack('a', 'b'); // Enqueue 'a' and 'b' to the back
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

#### *type*

```javascript
deque.type; // 'string'
```

## **License**

Deque is licensed under the MIT License (see the [LICENSE](LICENSE) file for more information).