//Unique Paths
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
    console.log(count[m - 1][n - 1]);
}
 

numberOfPaths(3, 3);