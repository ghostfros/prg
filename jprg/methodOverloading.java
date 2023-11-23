//compile time polymorphism with method overloading
public class methodOverloading {
    void m1()
    {
        System.out.println("method 1");
    }

    void m1(int a) {
        System.out.println("method 2 contains " + a);
    }

    public static void main(String[] args) {
        methodOverloading ol = new methodOverloading();
        ol.m1();
        ol.m1(10);
    }
}

