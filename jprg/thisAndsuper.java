//this and super keyword
// Base class
class Animal3 {
    String animalType;

    // Constructor with one parameter
    Animal3(String type) {
        this.animalType = type;
        System.out.println("Animal constructor with type: " + type);
    }

    // Method in the base class
    void display() {
        System.out.println("Animal Type: " + animalType);
    }
}

// Derived class
class Dog3 extends Animal3 {
    String dogBreed;

    // Constructor with two parameters
    Dog3(String type, String breed) {
        super(type); // Calling the parameterized constructor of the base class using super
        this.dogBreed = breed;
        System.out.println("Dog constructor with breed: " + breed);
    }

    // Method in the derived class
    void display() {
        super.display(); // Calling the display method of the base class using super
        System.out.println("Dog Breed: " + dogBreed);
    }

    // Method in the derived class using 'this'
    void displayFullInfo() {
        this.display(); // Calling the display method of the current class using this
        System.out.println("Complete Dog Information Displayed");
    }
}

public class thisAndsuper {
    public static void main(String[] args) {
        // Creating an instance of the derived class
        Dog3 myDog = new Dog3("Canine", "Labrador");

        // Calling methods using 'this' and 'super'
        myDog.displayFullInfo();
    }
}

