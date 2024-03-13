class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    logNode() {
        console.log(this);
    }
}

class LinkedList {


    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }



    insert(value) {
        this.length++;
        let newNode = new Node(value);

        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            return newNode;
        }

        this.head = this.tail = newNode;
        return newNode;
    }

    //Looping through the nodes using iteration (while statement).
    logNodes() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    //Looping through the nodes using recursion (simple traverse function);
    traverse(node = this.head) {

        console.log(node.value)
        if (this.head == null) {
            console.log("No nodes in the list")
            return;
        }
        if (node.next == null) {
            console.log("Finished traversing list");
            return;
        }
        this.traverse(node.next)
    }

    indexOf(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value == value) {
                console.log(`Value found at Node in index ${index}`)
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }

    }


    clear() {
        this.head = null;
        console.log(this);
    }


}





let linkedList = new LinkedList();

for (let i = 0; i < 10; i++) {
    linkedList.insert(i + 1)
}

linkedList.clear();






