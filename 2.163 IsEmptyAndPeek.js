// Implement isEmpty to return a boolean if items is empty.

// For bonus points, use this method in pop to check for underflow!

// Implement peek to return the top element in items without changing the array.
 
const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if ( this.items.length === MAX_STACK_SIZE) {
            throw new Error ("Max Size")
        }
        this.items.push(item);
        
    }
    pop(item) {
        if (this.items.length === 0) {
            throw new Error ("Min Size")
        }
        return this.items.pop(item);
        
    }
    isEmpty() {
        return this.items.length === 0;
        
    }
    peek() {
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.items.length-1]
    }
}