class Node {
constructor(val, children=[]) {
    this.val = val;
    this.children = children;
}

    // depth first search
    findDFS(val) {
        const toVisitStack = [this];
        while (toVisitStack.length) {
            // pop here instead of shift
            const current = toVisitStack.pop();
            console.log("Visiting", current.val);
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitStack.push(child);
            }
        }
    }

    // find breadth first search
    findBFS(val) {
        const toVisitQueue = [this];
        while (toVisitQueue.length) {
            // shift here instead of pop
            const current = toVisitQueue.shift();
            console.log("Visiting", current.val);
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitQueue.push(child);
            }
        }
    }
}

class Tree {
    // the root must be an existing node
    constructor(root){
        this.root = root;
    }

    findInTreeDFS(val){
        return this.root.findDFS(val);
    }
    findInTreeBFS(val){
        return this.root.findBFS(val);
    }
}