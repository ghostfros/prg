//count total objs
class objCount {
    static int cnt;
    objCount(){
        cnt++;
    }
    public static void main(String[] args) {
        objCount ob1 = new objCount();
        objCount ob2 = new objCount();
        objCount ob3 = new objCount();

        System.out.println("Total objects are " + objCount.cnt);
    }
}
