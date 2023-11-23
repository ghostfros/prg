
//Write a program to implement Merge Sort.

var arr = [15,3,7,6,2,9,69,4,99];
var b = new Array();
var length=arr.length;
merge_sort(arr,0,length-1);
console.log(arr); 

function merge_sort(arr, l,h)
{
   if (arr.length <= 1) 
      return arr;
    if(l<h)
    {
      let mid = Math.floor((l+h)/2);
      let left=merge_sort(arr, l, mid);
  		let right=merge_sort(arr, mid+1,h);
  		merge(arr, l, mid, h);
  	}
	 
}
function merge(arr, l, mid, h) 
{
        let i=l;
	      let j=mid+1;
	      let k=l;
	      
	      while(i<=mid && j<=h)
	      {
        		if(arr[i]<=arr[j])
        		{
        			b[k]=arr[i];
        			i=i+1;
        		}			
        		else
        		{
        			b[k]=arr[j];
        			j=j+1;
        		}
        		k=k+1;
      	}
      	while(j<=h)
      	{
      		b[k]=arr[j];
      		j=j+1;
      		k=k+1;
      	}
      	while(i<=mid)
      	{
      		b[k]=arr[i];
      		i=i+1;
      		k=k+1;
      	}
       for(i = l; i <= h; i++)
          arr[i] = b[i];
}

