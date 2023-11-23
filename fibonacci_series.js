
//Write a program to generate sequence of Fibonacci numbers using Dynamic Programming.

function fibonacciDynamicProgramming(n, memo = {}) {
    if (n <= 1) {
      return n; 
    }
  
  
    if (memo[n]) {
      return memo[n];
    }
  
   
    memo[n] = fibonacciDynamicProgramming(n - 1, memo) + fibonacciDynamicProgramming(n - 2, memo);
  
    return memo[n];
  }
  
  
  const n = 10; 
  const fibonacciSequence = [];
  
  for (let i = 0; i <= n; i++) {
    fibonacciSequence.push(fibonacciDynamicProgramming(i));
  }
  
  console.log(`Fibonacci sequence up to ${n} terms:`, fibonacciSequence);
  