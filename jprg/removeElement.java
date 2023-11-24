//remove element from an array

import java.util.ArrayList;

public class removeElement {

    public static void main(String[] args) {
        // Create an ArrayList
        ArrayList<String> arrayList = new ArrayList<>();

        // Add elements to the ArrayList
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Orange");
        arrayList.add("Grapes");

        // Display the original ArrayList
        System.out.println("Original ArrayList: " + arrayList);

        // Remove the third element (index 2)
        if (arrayList.size() >= 3) {
            arrayList.remove(2);
            System.out.println("After removing the third element: " + arrayList);
        } else {
            System.out.println("ArrayList does not have a third element to remove.");
        }
    }
}

