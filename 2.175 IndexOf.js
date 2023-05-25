/* Write a method indexOf on LinkedList which takes node and returns 
a number index that indicates where the node is in the list.

To determine if a node is equal to another node you can simply compare them with 
(node1 === node2). This will evaluate to true if they are the same node. */

class LinkedList {
    constructor () {
        this.head = null;
    }
    addFirst(node) {
        if (this.head === null) {
            this.head = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
    }

    addLast(node) {
    if (this.head === null) {
          this.head = node;
        }
    else {
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
            currentNode.next = node;
            
    }

    }
    indexOf(node) {
        if (this.head === node ){
            return 0;
        }
        let count = 0;
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
            count ++;
            if (currentNode === node){
                return count;
            }
        }

    }
    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
        }
        else {
        let count = 0;
        let preNode = null;
        let currentNode = this.head;
        while (currentNode.next) {
            preNode = currentNode;
            currentNode = currentNode.next;
            count ++;
            if (count === index){
                preNode.next = currentNode.next;
                return;
            }
        }
        }
    }
}