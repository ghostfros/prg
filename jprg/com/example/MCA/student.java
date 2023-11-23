//package with parameterized constructor
package com.example.MCA;

public class student {
private String studentName;
    private int marksSubject1;
    private int marksSubject2;
    private int marksSubject3;

    // Parameterized constructor
    public student(String studentName, int marksSubject1, int marksSubject2, int marksSubject3) {
        this.studentName = studentName;
        this.marksSubject1 = marksSubject1;
        this.marksSubject2 = marksSubject2;
        this.marksSubject3 = marksSubject3;
    }

    // Display method
    public void display() {
        System.out.println("Student Name: " + studentName);
        System.out.println("Marks in Subject 1: " + marksSubject1);
        System.out.println("Marks in Subject 2: " + marksSubject2);
        System.out.println("Marks in Subject 3: " + marksSubject3);
    }

    // Calculate total marks
    public int calculateTotalMarks() {
        return marksSubject1 + marksSubject2 + marksSubject3;
    }

    // Calculate percentage
    public double calculatePercentage() {
        int totalMarks = calculateTotalMarks();
        return (double) totalMarks / 3; // Assuming three subjects
    }
}
