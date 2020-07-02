class BinaryTree {
  constructor(question) {
    this.question = question;
    this.yes = null;
    this.no = null;
  }

  traverse(func) {
    func(this.question);
    if (this.yes) this.yes.traverse(func);
    if (this.no) this.no.traverse(func);
  }

  contains(question) {
    if (this.question === question) return true;
    if (this.yes !== null && this.yes.contains(question)) return true;
    if (this.no !== null && this.no.contains(question)) return true;
    return false;
  }
}

const myTree = new BinaryTree('question1');
myTree.yes = new BinaryTree('LeftChild');
myTree.no = new BinaryTree('RightChild');
myTree.no.no = new BinaryTree('LastChild');

// Contains check
console.log(myTree.contains('RightChild'));
// Traverse check
myTree.traverse(console.log);
