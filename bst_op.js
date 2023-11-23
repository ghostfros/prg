
//Write a program to implement binary search tree with its operations.

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    // Insert 
    insert(value) {
      this.root = this._insertRec(this.root, value);
    }
  
    _insertRec(root, value) {
      if (root === null) {
        return new TreeNode(value);
      }
  
      if (value < root.value) {
        root.left = this._insertRec(root.left, value);
      } else if (value > root.value) {
        root.right = this._insertRec(root.right, value);
      }
  
      return root;
    }
  
    // Search 
    search(value) {
      return this._searchRec(this.root, value);
    }
  
    _searchRec(root, value) {
      if (root === null || root.value === value) {
        return root;
      }
  
      if (value < root.value) {
        return this._searchRec(root.left, value);
      }
  
      return this._searchRec(root.right, value);
    }
  
    // Delete 
    delete(value) {
      this.root = this._deleteRec(this.root, value);
    }
  
    _deleteRec(root, value) {
      if (root === null) {
        return root;
      }
  
      if (value < root.value) {
        root.left = this._deleteRec(root.left, value);
      } else if (value > root.value) {
        root.right = this._deleteRec(root.right, value);
      } else {
        
        if (root.left === null) {
          return root.right;
        } else if (root.right === null) {
          return root.left;
        }
  
        
        root.value = this._minValueNode(root.right).value;
  
       
        root.right = this._deleteRec(root.right, root.value);
      }
  
      return root;
    }
  
    _minValueNode(node) {
      let current = node;
      while (current.left !== null) {
        current = current.left;
      }
      return current;
    }
  
    // Inorder 
    inorder() {
      const result = [];
      this._inorderRec(this.root, result);
      return result;
    }
  
    _inorderRec(root, result) {
      if (root !== null) {
        this._inorderRec(root.left, result);
        result.push(root.value);
        this._inorderRec(root.right, result);
      }
    }
  }
  

  const bst = new BinarySearchTree();
  bst.insert(10);
  bst.insert(5);
  bst.insert(15);
  bst.insert(2);
  bst.insert(7);
  bst.insert(12);
  bst.insert(17);
  
  console.log("Inorder Traversal:", bst.inorder());
  
  console.log("Search 12:", bst.search(12)); 
  
  bst.delete(10);
  console.log("Inorder Traversal after deleting 10:", bst.inorder());
  