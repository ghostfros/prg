//runtime exception
public class runtimeExcep {
    public static void main(String[] args) {
        try {
            // Trying to divide by zero, which causes an ArithmeticException (runtime exception)
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            // This block catches the runtime exception
            System.out.println("Runtime exception: " + e.getMessage());
        }
    }
}
