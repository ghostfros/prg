
//Write a program to implement Tower of Hanoi problem.

//Tower of Hanoi
function towerOfHanoi(n, A, B, C)
{
        if (n == 1)
        {
            console.log("Move disk from " +  A + " to " + C);
            return;
        }
        towerOfHanoi(n - 1, A, C, B);
        towerOfHanoi(1, A, B, C)
        towerOfHanoi(n - 1, B, A, C);
}
 

    var n = 3; // Number of disks
    towerOfHanoi(n, 'A', 'B', 'C'); 
 