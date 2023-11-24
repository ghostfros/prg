//append to hash set

import java.util.HashSet;

public class appendHashset{

    public static void main(String[] args) {
        // Create a HashSet
        HashSet<String> hashSet = new HashSet<>();

        // Add elements to the HashSet
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Orange");

        // Display the original HashSet
        System.out.println("Original HashSet: " + hashSet);

        // Append an element to the end of the HashSet
        String elementToAppend = "Grapes";
        hashSet.add(elementToAppend);

        // Display the HashSet after appending
        System.out.println("After appending an element: " + hashSet);
    }
}

