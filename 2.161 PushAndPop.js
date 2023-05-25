/* In our Stack class, you can see we already have a constructor with an items array.

In the push function, let's add a new item to our items.

In the pop function, let's remove the last item from items and return it. */

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