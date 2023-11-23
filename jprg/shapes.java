// Shape.java (Interface)
interface Shape {
    double getArea();
}

// Rectangle.java
class Rectangle implements Shape {
    private double length;
    private double width;

    // Constructor
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // Implementation of getArea() for Rectangle
    @Override
    public double getArea() {
        return length * width;
    }
}

// Circle.java
class Circle implements Shape {
    private double radius;

    // Constructor
    public Circle(double radius) {
        this.radius = radius;
    }

    // Implementation of getArea() for Circle
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

// Triangle.java
class Triangle implements Shape {
    private double base;
    private double height;

    // Constructor
    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    // Implementation of getArea() for Triangle
    @Override
    public double getArea() {
        return 0.5 * base * height;
    }
}

// MainClass.java
public class shapes {
    public static void main(String[] args) {
        // Creating instances of Rectangle, Circle, and Triangle
        Shape rectangle = new Rectangle(5, 10);
        Shape circle = new Circle(7);
        Shape triangle = new Triangle(4, 8);

        // Calculating and displaying areas
        System.out.println("Area of Rectangle: " + rectangle.getArea());
        System.out.println("Area of Circle: " + circle.getArea());
        System.out.println("Area of Triangle: " + triangle.getArea());
    }
}


