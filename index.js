class Tree {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  insertChild(name) {
    const newTree = new Tree(name);
    this.children.push(newTree);
    return newTree;
  }

  removeChild(name) {
    const newChildren = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const child of this.children) {
      if (child.name !== name) newChildren.push(child);
    }
    this.children = [...newChildren];
  }
}

const myTree = new Tree('oldest one');
myTree.insertChild('secondChild');
const middleAge = myTree.insertChild('middle tree');
middleAge.insertChild('Most young');
middleAge.insertChild('Most young2');

console.log(JSON.stringify(myTree));

middleAge.removeChild('Most young2');

console.log(JSON.stringify(myTree));
