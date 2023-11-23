function max(a, b)
{
    if (a > b)
        return a;
    else
        return b;
}

function shortestSuperSequence(X, Y)
{
    var m = X.length;
    var n = Y.length;
    // find lcs
    var l = lcs(X, Y, m, n);
     return (m + n - l);
}
 
// Returns length of LCS
// for X[0..m - 1], Y[0..n - 1]
function lcs(X, Y , m , n)
{
     var L = new Array(m + 1);
    for(var i = 0; i < L.length; i++)
    {
        L[i] = new Array(n + 1);
    }
    var i, j;
    
    for(i = 0; i <= m; i++)
    {
        for(j = 0; j <= n; j++)
        {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = max(L[i - 1][j], L[i][j - 1]);
        }
    }
     
    return L[m][n];
}
 
// Driver code
var X = "AGGTAB";
var Y = "GXTXAYB";
 
console.log("Length of the shortest "
                   + "supersequence is "
                   + shortestSuperSequence(X, Y));