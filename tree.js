function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  this.root = new Node(data);
}

const t = new Tree('a');

const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

t.root.children = [b, c, d];
b.parent = c.parent = d.parent = t.root;
d.children = [e, f];
e.parent = f.parent = d;

Tree.prototype.traverseDF = function (callback) {
  (function recurse(node) {
    for (let i in node.children) recurse(node.children[i]);
    callback(node);
  })(this.root);
};

Tree.prototype.traverseBF = function (callback) {
  (function recurse(node) {
    callback(node);
    for (let i in node.children) recurse(node.children[i]);
  })(this.root);
};

Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback);
};

Tree.prototype.add = function (data, toData, traversal) {
  const child = new Node(data);
  const callback = function (node) {
    if (node.data === toData) child.parent = node;
  };
  this.contains(callback, traversal);
  if (child.parent) child.parent.children.push(child);
  else throw Error('Cannot add node to a non-existent parent.');
};

Tree.prototype.remove = function (data, traversal) {
  let nodeToRemove;
  const callback = function (node) {
    if (node.data === data) nodeToRemove = node;
  }
  this.contains(callback, traversal);
  const parent = nodeToRemove.parent;
  if (parent) parent.children = parent.children.filter(e => e.data !== nodeToRemove.data);
  else throw Error('Parent does not exist.');
};

// t.traverseDF(node => console.log(node));
// t.traverseBF(node => console.log(node));
// t.contains(node => console.log(node), t.traverseBF);
// t.add('z', 'a', t.traverseBF);
// t.remove('d', t.traverseBF);
