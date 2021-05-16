export class DSNode<T> {
  public next?: DSNode<T>;
  constructor(public value: T) {}
}

export class LinkedList<T> {
  private head: DSNode<T> | undefined;
  private tail: DSNode<T> | undefined;
  private length: number = 0;

  createNode(value: T) {
    return new DSNode(value);
  }

  public append(value: T) {
    const node = this.createNode(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
  }

  public delete(value: T): boolean {
    if (!this.isEmpty()) {
      if (value === this.head?.value) {
        this.head = this.head.next;
        this.length--;
        return true;
      }
      let cur = this.head;
      while (cur) {
        if (cur.next?.value === value) {
          this.length--;
          cur.next = cur.next.next;
          return true;
        }
        cur = cur.next;
      }
    }

    return false;
  }

  public isEmpty() {
    return !this.head;
  }

  public *items() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

  public size() {
    return this.length;
  }
}
