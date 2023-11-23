
//Write a program to demonstrate singly linked list with following operations Create, Insert, Delete, Display, Reverse


class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Create 
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    // Insert 
    insert(position, data) {
      const newNode = new Node(data);
  
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      let count = 0;
      let previous = null;
  
      while (count < position) {
        previous = current;
        current = current.next;
        count++;
      }
  
      newNode.next = current;
      previous.next = newNode;
    }
  
    // Delete 
    delete(data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let previous = null;
  
      while (current && current.data !== data) {
        previous = current;
        current = current.next;
      }
  
      if (!current) {
        return; 
      }
  
      previous.next = current.next;
    }
  
    // Display 
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
    // Reverse 
    reverse() {
      let current = this.head;
      let prev = null;
  
      while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  }
  

  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  
  console.log("Original Linked List:");
  linkedList.display();
  
  linkedList.insert(1, 4);
  
  console.log("\nLinked List after Insertion:");
  linkedList.display();
  
  linkedList.delete(2);
  
  console.log("\nLinked List after Deletion:");
  linkedList.display();
  
  console.log("\nReversed Linked List:");
  linkedList.reverse();
  linkedList.display();
  