
//Write a program to implement Recursive Staircase problem.

class recursive_staircase
{
    fib(n)
    {
    if (n <= 1)
        return n;
    return this.fib(n - 1) +
           this.fib(n - 2);
    }
}

 
// Driver Code
var s=new recursive_staircase();
let num = 5;
console.log("Number of ways = " + s.fib(num+1));