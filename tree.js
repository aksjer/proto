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
}

Tree.prototype.traverseBF = function (callback) {
  (function recurse(node) {
    callback(node);
    for (let i in node.children) recurse(node.children[i]);
  })(this.root);
}

Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback);
}

Tree.prototype.add = function (data, toData, traversal) {
  
}

// t.traverseDF(node => console.log(node));
// t.traverseBF(node => console.log(node));
t.contains(node => console.log(node), t.traverseBF);
