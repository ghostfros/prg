
//Write a program to find Minimum number of jumps to reach end.

function minJumpsToEnd(arr) {
    const n = arr.length;
  
    if (n <= 1) {
      return 0; 
    }

    const jumps = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    jumps[0] = 0; 
  
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {

        if (j + arr[j] >= i) {

          jumps[i] = Math.min(jumps[i], jumps[j] + 1);
        }
      }
    }
  
    return jumps[n - 1];
  }
  

  const array = [2, 3, 1, 1, 2, 4, 2, 0, 1, 1];
  const result = minJumpsToEnd(array);
  
  console.log(`Minimum number of jumps needed: ${result}`);
  