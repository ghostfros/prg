function printArray(p, n)
{
    console.log("Partition is...");
    for(let i = 0; i < n; i++)
        console.log(p[i] + " ");
}
    
function printAllUniqueParts(n)
{
        
    let p = new Array(n); 
    let k = 0; 
    p[k] = n; 
    while (true)
    {
        printArray(p, k + 1);
  
        let rem_val = 0;
            
        while (k >= 0 && p[k] == 1)
        {
            rem_val += p[k];
            k--;
        }
  
        
        if (k < 0) 
            return;
        p[k]--;
        rem_val++;
  
        while (rem_val > p[k])
        {
            p[k + 1] = p[k];
            rem_val = rem_val - p[k];
            k++;
        }
  
        p[k + 1] = rem_val;
        k++;
    }
}
  
// Driver code
console.log("All Unique Partitions of 2");
printAllUniqueParts(2);
  
console.log("All Unique Partitions of 3");
printAllUniqueParts(3);
  
console.log("All Unique Partitions of 4");
printAllUniqueParts(4);
  