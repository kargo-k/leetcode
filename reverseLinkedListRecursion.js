// reverse a singly linked list using recursion

function Node(val) {
  this.val = val
  this.next = null
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)

let revLL = head => {
  if (!head || !head.next) return head

  let rem = revLL(head.next)
  head.next.next = head
  head.next = null
  return rem
}

console.log('Original LL: ', head)
console.log('Reversed LL: ', revLL(head))