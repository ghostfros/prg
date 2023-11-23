
//Write a program to Reverse a string using stack

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function reverseString(inputString) {
    const stack = new Stack();
    const reversedStringArray = [];
  

    for (let char of inputString) {
      stack.push(char);
    }
  

    while (!stack.isEmpty()) {
      reversedStringArray.push(stack.pop());
    }
  

    const reversedString = reversedStringArray.join('');
  
    return reversedString;
  }
  

  const inputString = "Hello, World!";
  const reversedString = reverseString(inputString);
  
  console.log(`Original String: ${inputString}`);
  console.log(`Reversed String: ${reversedString}`);
  