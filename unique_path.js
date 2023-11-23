
//Write a program to count all possible unique paths from top left to bottom right of a mXn matrix.

function numberOfPaths(m , n)
{
    
    var count=[[0,0,0], [0,0,0], [0,0,0]];
    
    for (i = 0; i < m; i++)
        count[i][0] = 1;
 
    for (j = 0; j < n; j++)
        count[0][j] = 1;
 
    for (i = 1; i < m; i++)
    {
        for (j = 1; j < n; j++)
 
           count[i][j] = count[i - 1][j] + count[i][j - 1];
    }
    console.log("Unique paths: " + count[m - 1][n - 1]);
}
 
numberOfPaths(3, 3);