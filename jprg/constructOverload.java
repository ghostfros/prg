//constructor overloading

public class constructOverload {

    // Default constructor
    constructOverload() {
        System.out.println("Default Constructor");
    }

    // Constructor with one parameter
    constructOverload(int value) {
        System.out.println("Parameterized Constructor with int: " + value);
    }

    // Constructor with two parameters
    constructOverload(String str, double number) {
        System.out.println("Parameterized Constructor with String and double: " + str + ", " + number);
    }

    public static void main(String[] args) {
        // Creating instances of the class using different constructors
        constructOverload defaultConstructor = new constructOverload();
        constructOverload intConstructor = new constructOverload(42);
        constructOverload stringDoubleConstructor = new constructOverload("Hello", 3.14);
    }
}
