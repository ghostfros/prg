//runtime polymorphism

class car {
    void player(){
        System.out.println("car class");
    }
}

class bmw extends car {
    void player(){
        System.out.println("car overriden by bmw");
    }
}

class runtimePoly {
    public static void main(String[] args) {
        bmw obj = new bmw();
        obj.player();
    }  
}
