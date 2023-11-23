//method overloading example
public class methodOverloadingEx {

    // Method with two integer parameters
    static int add(int a, int b) {
        return a + b;
    }

    // Method with three integer parameters
    static int add(int a, int b, int c) {
        return a + b + c;
    }

    // Method with two double parameters
    static double add(double a, double b) {
        return a + b;
    }

    // Method with a String parameter
    static String concatenate(String str1, String str2) {
        return str1 + str2;
    }

    public static void main(String[] args) {
        // Call the overloaded methods
        System.out.println("Sum of two integers: " + add(5, 7));
        System.out.println("Sum of three integers: " + add(5, 7, 10));
        System.out.println("Sum of two doubles: " + add(3.5, 2.8));
        System.out.println("Concatenation of two strings: " + concatenate("Hello", "World"));
    }
}

