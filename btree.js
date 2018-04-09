class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  add(data) {
    (function recurse(node) {
      if (node.data > data) {
        if (node.left) {
          recurse(node.left)
        } else {
          node.left = new Node(data);
        }
      } else if (node.data < data) {
        if (node.right) {
          recurse(node.right)
        } else {
          node.right = new Node(data);
        }
      }
    })(this.root);
  }

  getLeafs() {
    const leafs = [];
    (function recurse(node) {
      if (node.left) {
        recurse(node.left);
      }
      if (node.right) {
        recurse(node.right);
      }
      if (!node.left && !node.right) {
        leafs.push(node);
      }
    })(this.root);
    return leafs;
  }

}

let tree = new Tree(new Node(5));
tree.add(2);
tree.add(1);
tree.add(4);
tree.add(8);
tree.add(6);
tree.add(3);

let a = tree.getLeafs();

console.log(a);
