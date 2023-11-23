//pass and return object
class objPassDemo {
    int a, b;
    objPassDemo(int i, int j) {
        a=i;
        b=j;
    }
    boolean equalTo(objPassDemo ob) {
        return(ob.a==a && ob.b==b);
    }
}

public class passObj {
    public static void main(String[] args) {
        objPassDemo obj1 = new objPassDemo(100, 022);
        objPassDemo obj2 = new objPassDemo(100, 022);

        System.out.println("obj1==obj2 " + obj1.equalTo(obj2));
    }
}
