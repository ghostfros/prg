
//Write a program to demonstrate doubly linked list with following operations Create, Insert, Delete, Display


class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
    }
  
    // Create 
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
  
        current.next = newNode;
        newNode.prev = current;
      }
    }
  
    // Insert 
    insert(position, data) {
      const newNode = new Node(data);
  
      if (position === 0) {
        newNode.next = this.head;
        if (this.head) {
          this.head.prev = newNode;
        }
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      let count = 0;
  
      while (count < position && current) {
        current = current.next;
        count++;
      }
  
      if (!current) {
        return; 
      }
  
      newNode.prev = current.prev;
      newNode.next = current;
      if (current.prev) {
        current.prev.next = newNode;
      }
      current.prev = newNode;
    }
  
    // Delete 
    delete(data) {
      let current = this.head;
  
      while (current && current.data !== data) {
        current = current.next;
      }
  
      if (!current) {
        return; 
      }
  
      if (current.prev) {
        current.prev.next = current.next;
      } else {
        this.head = current.next;
      }
  
      if (current.next) {
        current.next.prev = current.prev;
      }
    }
  
    // Display 
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  
  const doublyLinkedList = new DoublyLinkedList();
  doublyLinkedList.append(1);
  doublyLinkedList.append(2);
  doublyLinkedList.append(3);
  
  console.log("Original Doubly Linked List:");
  doublyLinkedList.display();
  
  doublyLinkedList.insert(1, 4);
  
  console.log("\nDoubly Linked List after Insertion:");
  doublyLinkedList.display();
  
  doublyLinkedList.delete(2);
  
  console.log("\nDoubly Linked List after Deletion:");
  doublyLinkedList.display();
  