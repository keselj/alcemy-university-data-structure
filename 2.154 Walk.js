// Once again, we'll start with the base case.

// Given a node whose next property is undefined, return the node.

function walk(node) {
    if (node.next === undefined){
        return node}
    return walk(node.next);
};