class Stack {
  constructor(...items) {
    this.items = items;
  }

  clear() {
    this.items.length = 0;
  }

  clone() {
    return new Stack(...this.items);
  }

  contains(item) {
    return this.items.includes(item);
  }

  peek() {
    let itemsLength = this.items.length;
    let item = this.items[itemsLength - 1];
  }

  pop() {
    let removedItem = this.items.pop();
    return removedItem;
  }

  push() {
    this.items.push(item);
    return item;
  }
}
