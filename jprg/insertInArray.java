//insert an element in specific position in array

import java.util.Arrays;

public class insertInArray {

    // Method to insert an element at a specific position in the array
    static int[] insertElement(int[] array, int position, int element) {
        // Check if the position is valid
        if (position < 0 || position > array.length) {
            System.out.println("Invalid position");
            return array; // Return the original array if the position is invalid
        }

        // Create a new array with increased size
        int[] newArray = new int[array.length + 1];

        // Copy elements before the specified position
        System.arraycopy(array, 0, newArray, 0, position);

        // Insert the new element at the specified position
        newArray[position] = element;

        // Copy elements after the specified position
        System.arraycopy(array, position, newArray, position + 1, array.length - position);

        return newArray;
    }

    public static void main(String[] args) {
        // Sample array
        int[] numbers = {1, 2, 3, 4, 5};

        // Position and element to insert
        int positionToInsert = 2;
        int elementToInsert = 10;

        // Using the insertElement method to insert the element at the specified position
        int[] newArray = insertElement(numbers, positionToInsert, elementToInsert);

        // Displaying the original and modified arrays
        System.out.println("Original Array: " + Arrays.toString(numbers));
        System.out.println("Array after inserting " + elementToInsert + " at position " + positionToInsert + ": " + Arrays.toString(newArray));
    }
}

