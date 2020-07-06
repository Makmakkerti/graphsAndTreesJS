class Tree {
  constructor(question, recommendation = null) {
    this.question = question;
    this.yes = null;
    this.no = null;
    if (recommendation) {
      this.reccomendation = recommendation;
    }
  }

  insertChild(question, recommendation) {
    const newTree = new Tree(question, recommendation);
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
