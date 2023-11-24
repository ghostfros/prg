//check if array contains a specific value

import java.util.Arrays;

public class arrayContains {

    // Method to check if an array contains a specific value
    static boolean containsValue(int[] array, int value) {
        for (int element : array) {
            if (element == value) {
                return true; // Value found in the array
            }
        }
        return false; // Value not found in the array
    }

    public static void main(String[] args) {
        // Sample array
        int[] numbers = {1, 2, 3, 4, 5};

        // Value to check
        int valueToCheck = 3;

        // Using the containsValue method to check if the array contains the specified value
        boolean result = containsValue(numbers, valueToCheck);

        // Displaying the result
        if (result) {
            System.out.println("The array contains the value " + valueToCheck);
        } else {
            System.out.println("The array does not contain the value " + valueToCheck);
        }
    }
}
