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
}

const myTree = new Tree('oldest one');
const middleAge = myTree.insertChild('middle tree');
middleAge.insertChild('Most young');
middleAge.insertChild('Most young2');
console.log(JSON.stringify(myTree));
