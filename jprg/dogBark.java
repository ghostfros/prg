//interface animal 
interface Animal
{
    public void bark();
}
class Dog implements Animal {
    public void bark()
    {
        System.out.println("dog is barking");
    }
}
public class dogBark {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.bark();
    }
}
