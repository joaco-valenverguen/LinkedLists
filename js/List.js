class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    let item = new Nodo(data);

    if (!this.head) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      this.tail = item;
    }
    item.index = this.size;
    this.size++;
  }

  display() {
    let listString = "";
    let p = this.head;
    for (let i = 0; i < this.size; i++) {
      listString += p.data + " -> ";
      p = p.next;
    }
    if (!p) listString += "null";
    console.log(listString);
  }

  remove(item) {
    let p = this.head,
      last = p;
    let found = false;
    while (p && !found) {
      if (p.data === item) {
        found = true;
        last.next = p.next;
      }
      last = p;
      p = p.next;
    }
    this.size--;
  }
}

lista = new List();
lista.add(4);
lista.add(3);
lista.add(2);
lista.add(41);
lista.display();
lista.remove(41);
lista.display();
