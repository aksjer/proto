class Node {
  constructor(data, parent) {
    this.data = data;
    this.parent = parent || null;
    this.children = [];
  }
}

class Tree {

  constructor(data) {
    this.root = new Node(data);
  }

  traverseDF(callback) {
    const recurse = node => {
      for (let item of node.children) recurse(item);
      callback(node);
    };
    recurse(this.root);
  }

  traverseBF(callback) {
    const recurse = node => {
      callback(node);
      for (let item of node.children) recurse(item);
    };
    recurse(this.root);
  }

  add(data, parent) {
    this.traverseBF(node => {
      if (node.data === parent) node.children.push(new Node(data, node));
    });
  }

  delete(data) {
    this.traverseBF(node => {
      if (node.data === data) {
        const parent = node.parent;
        if (parent) parent.children = parent.children.filter(n => n.data !== data);
        else throw Error('Cannot delete root node.');
      }
    })
  }

  getLeafs() {
    const leafs = [];
    this.traverseBF(node => {
      if (!node.children.length) leafs.push(node);
    })
    return leafs;
  }

  getHeight() {
    let h = 0;
    let c = 0;
    const l = this.getLeafs();
    debugger
    const recurse = node => {
      if (node !== this.root) {
        c++;
        recurse(node.parent);
      } else {
        if (c > h) h = c;
        c = 0;
      }
    }
    while (l.length) recurse(l.shift());
    return h;
  }

}
