const family = {
  name: 'Ashley',
  children: [{
    name: 'Sammy',
    children: [{
      name: 'Dolly',
      children: [{
        name: 'Albert',
        children: [{
          name: 'Rickie',
          children: [],
        }],
      }],
    }],
  }],
};

const traverse = (tree) => {
  console.log(tree.name);
  if (!tree.children.length) return;
  // eslint-disable-next-line no-restricted-syntax
  for (const child of tree.children) {
    // eslint-disable-next-line no-unused-vars
    traverse(child);
  }
};

traverse(family);
