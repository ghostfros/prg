//hierarchical inheritance

// Base class
class Animal1 {
    void eat() {
        System.out.println("Animal is eating");
    }

    void sleep() {
        System.out.println("Animal is sleeping");
    }
}

// Derived class 1
class Dog1 extends Animal1 {
    void bark() {
        System.out.println("Dog is barking");
    }
}

// Derived class 2
class Cat extends Animal1 {
    void meow() {
        System.out.println("Cat is meowing");
    }
}

public class hierarchicalInherit {
    public static void main(String[] args) {
        // Creating instances of Dog and Cat
        Dog1 myDog = new Dog1();
        Cat myCat = new Cat();

        // Calling methods from the base class (Animal)
        myDog.eat();
        myDog.sleep();

        myCat.eat();
        myCat.sleep();

        // Calling methods specific to each derived class
        myDog.bark();
        myCat.meow();
    }
}
