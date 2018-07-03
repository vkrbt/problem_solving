class NodeBST {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor(value) {
    if (value !== null) {
      this.root = new NodeBST(value, null, null);
      return;
    }
    this.root = null;
  }

  has(value) {
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return true;
      }
      if (current.value > value) {
        current = current.left;
      }
      current = current.right;
    }
  }

  add(value) {
    
  }

  traverse() {

  }
}
