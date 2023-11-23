
//Write a program to reverse stack using queue.

class Stack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    // Push 
    push(element) {
      this.queue1.push(element);
    }
  
    // Pop 
    pop() {
      if (this.isEmpty()) {
        return null;
      }
  

      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
  
 
      const poppedElement = this.queue1.shift();
  

      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return poppedElement;
    }
  
 
    isEmpty() {
      return this.queue1.length === 0;
    }
  }
  

  const stack = new Stack();
  

  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Original Stack:");
  while (!stack.isEmpty()) {
    console.log(stack.pop());
  }
  
  