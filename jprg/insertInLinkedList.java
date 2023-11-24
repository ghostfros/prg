//insert in linked list

import java.util.LinkedList;

public class insertInLinkedList {

    public static void main(String[] args) {
        // Create a LinkedList
        LinkedList<String> linkedList = new LinkedList<>();

        // Add elements to the LinkedList
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Orange");
        linkedList.add("Grapes");

        // Display the original LinkedList
        System.out.println("Original LinkedList: " + linkedList);

        // Insert an element at the second location (index 1)
        linkedList.add(1, "Mango");

        // Display the LinkedList after insertion
        System.out.println("After inserting at the second location: " + linkedList);
    }
}

