//factorial using recursion
public class factorial {

    // Recursive method to calculate factorial
    static long fact(int n) {
        if (n == 0 || n == 1) {
            return 1; // Base case: 0! and 1! are both 1
        } else {
            return n * fact(n - 1); // Recursive call
        }
    }

    public static void main(String[] args) {
        // Test the factorial method
        int number = 5; // Replace with your desired number
        long result = fact(number);

        System.out.println("Factorial of " + number + " is: " + result);
    }
}

