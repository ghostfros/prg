
//Write a program to check for balanced parentheses of an expression by using stacks

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
  
  function isBalanced(expression) {
    const stack = new Stack();
    const openingBrackets = "({[";
    const closingBrackets = ")}]";
  
    for (let char of expression) {
      if (openingBrackets.includes(char)) {
        
        stack.push(char);
      } else if (closingBrackets.includes(char)) {
        
        const top = stack.pop();
        if (!top || openingBrackets.indexOf(top) !== closingBrackets.indexOf(char)) {
        
          return false;
        }
      }
    }
  

    return stack.isEmpty();
  }
  
  const expression1 = "{[()]}" // Balanced
  const expression2 = "{[(])}" // Not balanced
  
  console.log(`Expression 1 is ${isBalanced(expression1) ? "balanced" : "not balanced"}`);
  console.log(`Expression 2 is ${isBalanced(expression2) ? "balanced" : "not balanced"}`);
  