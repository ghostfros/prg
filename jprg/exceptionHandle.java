//exception handling with try catch
public class exceptionHandle {
    public static void main(String[] args) {
        try {
            // Trying to divide by zero, which will throw an ArithmeticException
            int result = 10 / 0;
            System.out.println("Result: " + result); // This line won't be executed
        } catch (ArithmeticException e) {
            // Catching the ArithmeticException and printing the error message
            System.out.println("Caught an exception: " + e.getMessage());
        }
        System.out.println("Program continues after the exception handling");
    }
}

