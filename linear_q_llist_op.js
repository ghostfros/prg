
//Write a program to implement Linear Queue using linked list with INSERT, DELETE and DISPLAY operations

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
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
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
  
      this.size++;
    }
  
    // dequeue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty. Cannot dequeue.");
        return;
      }
  
      const dequeuedData = this.front.data;
      this.front = this.front.next;
      this.size--;
  
      if (!this.front) {
        this.rear = null;
      }
  
      return dequeuedData;
    }
  
    // DISPLAY 
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
      }
  
      let current = this.front;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  

    isEmpty() {
      return this.size === 0;
    }
  }
  

  const queue = new Queue();
  
  console.log("Enqueuing elements into the queue:");
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.display();
  
  console.log("\nDequeuing element from the queue:");
  console.log("Dequeued:", queue.dequeue());
  queue.display();
  