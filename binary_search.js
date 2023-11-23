
//Write a program to implement binary search.

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === target) {
        return mid; 
      } else if (arr[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return -1; 
  }
  
  
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
  const targetElement = 7;
  
  const result = binarySearch(sortedArray, targetElement);
  
  if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
  } else {
    console.log(`Element ${targetElement} not found in the array.`);
  }
  