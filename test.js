var Node = require('./');

var head = new Node('a');
head.append('b');
head.append('c');

function remove(head, data) {
  if (head.data === data) {
    return head.next;
  }

  var prev = head;
  var current = head.next;

  while (current) {
    if (current.data === data) {
      prev.next = current.next;
      return head;
    }
    prev = current;
    current = current.next;
  }

  return head;
}

var x = remove(head, 'd');

console.log(x);