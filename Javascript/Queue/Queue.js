import LinkedList from "../LinkedList/LinkedList.js";

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  clear() {
    this.items = new LinkedList();
  }

  contains(item) {
    this.items.contains(item);
  }

  peek() {
    return this.items.head.data;
  }

  dequeue() {
    let removedItem = this.items.head.data;
    this.items.removeFirst();
    return removedItem;
  }

  enqueue(item) {
    this.items.addLast(item);
  }

  get_length() {
    return this.items.get_length();
  }
}

// create new Queue object
let myQ = new Queue();

// add two items
myQ.enqueue("Item 1");
myQ.enqueue("Item 2");

console.log(myQ);

// remove item
let removedItem = myQ.dequeue(); // returns Item 1
console.log(removedItem);
