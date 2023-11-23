
//Write a program to display Power Set of a given set using backtracking approach.

function powerSet(set) {
    const result = [];
    backtrack([], 0);
  
    function backtrack(currentSubset, start) {
      result.push(currentSubset.slice()); 
  
      for (let i = start; i < set.length; i++) {
        currentSubset.push(set[i]); 
        backtrack(currentSubset, i + 1); 
        currentSubset.pop(); 
      }
    }
  
    return result;
  }
  

  const inputSet = [1, 2, 3];
  const result = powerSet(inputSet);
  
  console.log("Power Set:", result);
  