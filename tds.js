function Node(data, parent) {
  this.data = data;
  this.parent = parent || null;
  this.children = [];
}

function Tree(rootNode) {
  this.root = rootNode;
}

Tree.prototype.traverse = function (callback) {
  const recurse = node => {
    for (let i in node.children) recurse.call(this, node.children[i]);
    callback.call(this, node);
  };
  recurse(this.root);
};

Tree.prototype.add = function (data, toData) {
  this.traverse(node => {
    if (node.data === toData) node.children.push(new Node(data, node));
  });
};

Tree.prototype.remove = function (data) {
  this.traverse(node => {
    if (node.data === data) {
      const i = node.parent.children.findIndex(n => n.data === data);
      node.parent.children.splice(i, 1);
    }
  });
};

Tree.prototype.getLeafs = function () {
  const l = [];
  let r;
  this.traverse(node => {
    if (!node.children.length) // || !node.parent && node.children.length === 1)
      l.push(node.data);
    if (!node.parent && node.children.length === 1)
      r = node;
  });
  return {
    leafs: l,
    root: r
  };
};

const data = [
  [0, 1],
  [1, 2],
  [2, 3],
  [2, 6],
  [3, 4],
  [3, 5],
  [6, 7]
];

function createTree(data) {
  const nodes = new Map();
  const noRoot = [];
  for (let [x, y] of data) {
    const n = nodes[x];
    if (n) {
      n.children.push(new Node(y, n));
    } else {
      if (!noRoot.map(e => +e.data).includes(x)) {
        const nx = new Node(x);
        const yx = new Node(y, nx);
        nx.children.push(yx);
        noRoot.push(yx);
        nodes[x] = nx;
      } else {
        const parent = noRoot.filter(nd => nd.data === x)[0];
        const yx = new Node(y, parent);
        parent.children.push(yx);
        noRoot.push(yx);
      }
    }
  }
  return nodes[0];
}

const tree = new Tree(createTree(data));

function app() {
  let cpt = 0;
  while (tree.root.children.length) {
    const r = tree.getLeafs();
    for (let i of r)
      tree.remove(i);
    cpt++;
  }
  return cpt;
}

function app2() {
  let cpt = 0;
  while (tree.root.children.length) {
    const {
      leafs,
      root
    } = tree.getLeafs();
    for (let i of leafs)
      tree.remove(i);
    if (root) {
      tree.root = root.children[0];
      tree.root.parent = null;
    }
    cpt++;
  }
  return cpt;
}

console.log(app2());
