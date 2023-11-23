//deep and shallow cloning
class mnc {
    int x=30;
    int y=10;
}

public class cloning {
    public static void main(String[] args) {
        mnc obj1 = new mnc();
        mnc obj2 = new mnc();
        mnc obj3 = obj1;

        obj2.x = 40;
        obj3.y = 20;

        System.out.println("value of x " + obj1.x);
        System.out.println("value of y " + obj1.y);

    }
}
