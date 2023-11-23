//compile time polymorphsim with operator overloading

public class operatorOver {
    public int sum(int num1,int num2){
        return num1 + num2;
    }
    public String sum(String str1,String str2){
        return str1 + str2;
    }
}
class MainClass{
    public static void main(String[] args) {
        operatorOver obj = new operatorOver();
        System.out.println(obj.sum(60,9));
        System.out.println(obj.sum("my name is ","ben"));
    }
}
