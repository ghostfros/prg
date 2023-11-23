//main and user thread
class UserThread extends Thread {
    public void run() {
        System.out.println("User Thread!");
    }
}

public class mainThread {
    public static void main(String[] args) {
        // Creating and starting the user thread
        UserThread userThread = new UserThread();
        userThread.start();

        // Main thread printing "Main Thread"
        System.out.println("Main Thread");
    }
}

