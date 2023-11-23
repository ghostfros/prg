//multilevel inheritance
// Base class
class Animal2 {
    Animal2() {
        System.out.println("Animal constructor");
    }

    void eat() {
        System.out.println("Animal is eating");
    }
}

// Derived class 1
class Mammal extends Animal2 {
    Mammal() {
        // Implicit call to the default constructor of the base class (Animal)
        System.out.println("Mammal constructor");
    }

    void run() {
        System.out.println("Mammal is running");
    }
}

// Derived class 2
class Dog2 extends Mammal {
    Dog2() {
        // Implicit call to the default constructor of the immediate base class (Mammal)
        System.out.println("Dog constructor");
    }

    void bark() {
        System.out.println("Dog is barking");
    }
}

public class multilevelInherit {
    public static void main(String[] args) {
        // Creating an instance of Dog
        Dog2 myDog = new Dog2();

        // Calling methods from different levels of inheritance
        myDog.eat();  // From the base class (Animal)
        myDog.run();  // From the immediate base class (Mammal)
        myDog.bark(); // From the current class (Dog)
    }
}

