//check min and max value in an array

public class minMaxArray {

    // Method to find the maximum value in an array
    static int findMax(int[] array) {
        if (array == null || array.length == 0) {
            throw new IllegalArgumentException("Array is empty or null");
        }

        int max = array[0];

        for (int element : array) {
            if (element > max) {
                max = element;
            }
        }

        return max;
    }

    // Method to find the minimum value in an array
    static int findMin(int[] array) {
        if (array == null || array.length == 0) {
            throw new IllegalArgumentException("Array is empty or null");
        }

        int min = array[0];

        for (int element : array) {
            if (element < min) {
                min = element;
            }
        }

        return min;
    }

    public static void main(String[] args) {
        // Sample array
        int[] numbers = {7, 2, 9, 1, 5, 8};

        // Using the findMax and findMin methods to get the maximum and minimum values
        int max = findMax(numbers);
        int min = findMin(numbers);

        // Displaying the results
        System.out.println("Array: " + java.util.Arrays.toString(numbers));
        System.out.println("Maximum Value: " + max);
        System.out.println("Minimum Value: " + min);
    }
}

