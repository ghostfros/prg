
//Write a program to implement STACK using linked list with PUSH, POP and DISPLAY operations

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    // PUSH 
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    // POP 
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty. Cannot pop.");
        return;
      }
  
      const poppedData = this.top.data;
      this.top = this.top.next;
      this.size--;
      return poppedData;
    }
  
    // DISPLAY 
    display() {
      if (this.isEmpty()) {
        console.log("Stack is empty.");
        return;
      }
  
      let current = this.top;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  

    isEmpty() {
      return this.size === 0;
    }
  }
  

  const stack = new Stack();
  
  console.log("Pushing elements onto the stack:");
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.display();
  
  console.log("\nPopping element from the stack:");
  console.log("Popped:", stack.pop());
  stack.display();
  