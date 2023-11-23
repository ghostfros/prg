// MainClass.java
import com.example.MCA.student;

public class mainClass {
    public static void main(String[] args) {
        // Creating an instance of the Student class (from the MCA package)
        student student = new student("John Doe", 85, 90, 78);

        // Displaying student details
        System.out.println("Student Details:");
        student.display();

        // Calculating total marks and percentage
        int totalMarks = student.calculateTotalMarks();
        double percentage = student.calculatePercentage();

        System.out.println("\nTotal Marks: " + totalMarks);
        System.out.println("Percentage: " + percentage + "%");
    }
}

