//compile time exception

import java.io.FileReader;
import java.io.IOException;

public class compiletimeExcep {
    public static void main(String[] args) {
        try {
            // Trying to read a file that may not exist
            FileReader fileReader = new FileReader("non.txt");
        } catch (IOException e) {
            // This block catches the checked exception (compile-time exception)
            System.out.println("Compile-time exception: " + e.getMessage());
        }
    }
}