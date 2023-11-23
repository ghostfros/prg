
//Write a program to implement Rain Terrace problem.

class rain_terrace
{
    maxWater(arr)
    {
 
        var size=arr.length;
        let res = 0;
 
        for(let i = 0; i < size; i++)
        {
 
            var a = arr[i];
            for(let j = 0; j < i; j++)
            {
                a = Math.max(a, arr[j]);
            }
 
            // Find maximum element on its right
            let b = arr[i];
            for(let j = i + 1; j < size; j++)
            {
                b = Math.max(b, arr[j]);
            }
 
            // Update maximum water value
            res += Math.min(a, b) - arr[i];
        }
        console.log("Total no of drops: "+res);
    }
}
    
var arr = [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ];
var r=new rain_terrace();
r.maxWater(arr);
  
    
     