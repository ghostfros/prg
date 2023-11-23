
//Write a program to implement Priority Queue using linked list with INSERT, DELETE and DISPLAY

class Node {
    constructor(data, priority) {
      this.data = data;
      this.priority = priority;
      this.next = null;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.front = null;
      this.size = 0;
    }
  
    // enqueue
    enqueue(data, priority) {
      const newNode = new Node(data, priority);
  
      if (!this.front || priority < this.front.priority) {
        newNode.next = this.front;
        this.front = newNode;
      } else {
        let current = this.front;
        while (current.next && priority >= current.next.priority) {
          current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
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
        console.log(`Data: ${current.data}, Priority: ${current.priority}`);
        current = current.next;
      }
    }
  

    isEmpty() {
      return this.size === 0;
    }
  }
  

  const priorityQueue = new PriorityQueue();
  
  console.log("Enqueuing elements into the priority queue:");
  priorityQueue.enqueue("Task 1", 3);
  priorityQueue.enqueue("Task 2", 1);
  priorityQueue.enqueue("Task 3", 2);
  priorityQueue.display();
  
  console.log("\nDequeuing element from the priority queue:");
  console.log("Dequeued:", priorityQueue.dequeue());
  priorityQueue.display();
  