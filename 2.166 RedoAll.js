// Let's go ahead and implement redoAll where we keep redo-ing until we have no more undos left.

const Stack = require('./Stack');

class OperationManager {
    constructor() {
        this.operations = new Stack();
        this.undos = new Stack();

    }

    addOperation(operation) {
        this.operations.push(operation);

    }

    undo() {
        this.undos.push(this.operations.pop());
        
    }

    redo() {
        this.operations.push(this.undos.pop());
    }

    redoAll() {
        while (!this.undos.isEmpty()){
            this.redo();
        }
        
    }
}