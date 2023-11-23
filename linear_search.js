
//Write a program to implement linear search.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; 
      }
    }
    return -1;
  }
  
  
  const array = [2, 5, 7, 1, 9, 3];
  const targetElement = 7;
  
  const result = linearSearch(array, targetElement);
  
  if (result !== -1) {
    console.log(`Element ${targetElement} found at index ${result}.`);
  } else {
    console.log(`Element ${targetElement} not found in the array.`);
  }
  