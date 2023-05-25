/* Ok, let's throw errors for stack overflows and underflows within our Stack class.

If executing push will exceed the MAX_STACK_SIZE, throw an Error.
MAX_STACK_SIZE is a number value. The number of elements in the items array cannot exceed this number.

If a pop is attempted on a stack with zero elements, throw an Error.
 To throw an Error, you can throw new Error("any error message"). 
 For more on errors, you can refer back to the Exceptions lesson or the MDN documentation. */

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