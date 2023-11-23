//Access Super Class in a Method Overriding.
// Base class
class Animal4 {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

// Derived class
class Dog4 extends Animal4 {
    // Overriding the sound method
    @Override
    void sound() {
        super.sound(); // Accessing the overridden method from the superclass
        System.out.println("Dog barks");
    }
}

public class superClass {
    public static void main(String[] args) {
        // Creating an instance of the derived class
        Dog4 myDog = new Dog4();

        // Calling the overridden method in the derived class
        myDog.sound();
    }
}

