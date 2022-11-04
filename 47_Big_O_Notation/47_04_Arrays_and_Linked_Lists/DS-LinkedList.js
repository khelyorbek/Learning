// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// const firstPage = new Node('google.com');
// const secondPage = new Node('reddit.com');
// const thirdPage = new Node('amazon.com')

// firstPage.next = secondPage;
// secondPage.next = thirdPage;

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// const firstPage =
//     new Node('google.com',
//         new Node('reddit.com',
//             new Node('amazon.com',
//                 new Node('youtube.com'))));

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
  }
  find(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === val) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
  append(val) {
    // creating a new node item which will be (val = "Text", next = null) based on constructor
    const newNode = new Node(val);
    // if there is no head or head = null (first item)
    if (!this.head) {
      // setting the head as the new item
      this.head = newNode;
      // setting the tail as the new item
      this.tail = newNode;
      // since there is only 1 item in the linked list
    }
    // Otherwise, telling the class that our tail's next item is the new item
    // before (val = "Text", next = null)
    // after (val = "Text, next = ("NewItem", null))
    this.tail.next = newNode;
    // And setting the tail is now the new item
    // tail, next item (val = "Text", next = null)
    // becomes (val = "Text, next = ("NewItem", null))
    // then tail becomes (val = "NewItem", next = null)
    this.tail = newNode;
  }
}

// const history = new LinkedList();
// history.head = firstPage;

const train = new LinkedList();
train.append("Engine");
train.append("Freight Car 1");
train.append("Freight Car 2");
