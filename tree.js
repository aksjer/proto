function Node(data, parent) {
  this.data = data;
  this.parent = parent || null;
  this.children = [];
}

function Tree(rootNode) {
  this.root = rootNode;
}

/* Breadth-First */
Tree.prototype.traverseBF = function (callback) {
  const recurse = node => {
    callback.call(this, node);
    for (let i in node.children) recurse.call(this, node.children[i]);
  };
  recurse(this.root);
};

/* Depth-First */
Tree.prototype.traverseDF = function (callback) {
  const recurse = node => {
    for (let i in node.children) recurse.call(this, node.children[i]);
    callback.call(this, node);
  };
  recurse(this.root);
};

Tree.prototype.add = function (data, toData, traverse) {
  traverse.call(this, node => {
    if (node.data === toData) node.children.push(new Node(data, node));
  });
};

Tree.prototype.remove = function (data, traverse) {
  traverse.call(this, node => {
    if (node.data === data) {
      const i = node.parent.children.findIndex(n => n.data === data);
      node.parent.children.splice(i, 1);
    }
  });
};

Tree.prototype.getLeafs = function () {
  const leafs = [];
  this.traverseDF(node => {
    if (!node.children.length) leafs.push(node.data);
  });
  return leafs;
};

Tree.prototype.getRoot = function () {
  let root;
  this.traverseBF(function (node) {
    if (!node.parent) root = node;
  });
  return root;
};

const tree = new Tree(new Node('a'));

tree.add('b', 'a', tree.traverseDF);
tree.add('c', 'a', tree.traverseDF);
tree.add('d', 'a', tree.traverseDF);
tree.add('e', 'd', tree.traverseDF);
tree.add('f', 'd', tree.traverseDF);
tree.add('g', 'e', tree.traverseDF);


console.log(tree.getLeafs());
console.log(tree.getRoot());

// t.traverseDF(node => console.log(node));
// t.traverseBF(node => console.log(node));
// t.contains(node => console.log(node), t.traverseBF);
// t.add('z', 'a', t.traverseBF);
// t.remove('d', t.traverseBF);
