
//Write a program to implement Circular Queue using linked list with INSERT, DELETE and DISPLAY operations

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularQueue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    // enqueue
    enqueue(data) {
      const newNode = new Node(data);
  
      if (!this.front) {
        this.front = newNode;
      } else {
        this.rear.next = newNode;
      }
  
      this.rear = newNode;
      this.rear.next = this.front;
  
      this.size++;
    }
  
    // dequeue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty. Cannot dequeue.");
        return;
      }
  
      const dequeuedData = this.front.data;
  
      if (this.front === this.rear) {
        this.front = null;
        this.rear = null;
      } else {
        this.front = this.front.next;
        this.rear.next = this.front; 
      }
  
      this.size--;
  
      return dequeuedData;
    }
  
    // DISPLAY 
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
      }
  
      let current = this.front;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.front);
    }
  

    isEmpty() {
      return this.size === 0;
    }
  }
  

  const circularQueue = new CircularQueue();
  
  console.log("Enqueuing elements into the circular queue:");
  circularQueue.enqueue(1);
  circularQueue.enqueue(2);
  circularQueue.enqueue(3);
  circularQueue.display();
  
  console.log("\nDequeuing element from the circular queue:");
  console.log("Dequeued:", circularQueue.dequeue());
  circularQueue.display();
  