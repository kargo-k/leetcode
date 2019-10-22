function Node(val) {
  this.val = val
  this.next = null
}

let head = new Node(1)
let curr = head

for (let i = 2; i <= 5; i++) {
  curr.next = new Node(i)
  curr = curr.next
}

let printVals = head => {
  if (!head) return []
  let curr = head
  let output = []
  while (curr) {
    output.push(curr.val)
    curr = curr.next
  }
  console.log(output)
}

let revSeg = (head, m, n) => {
  // if null head, return null; if one node, return the same head
  if (!head || !head.next) return head

  let curr = head
  let prev = null

  while (m > 1) {
    prev = curr
    curr = curr.next
    m--
    n--
  }

  let segL = prev
  let tail = curr
  let nextNode = null

  while (n > 0) {
    nextNode = curr.next
    curr.next = prev
    prev = curr
    curr = nextNode
    n--
  }

  segL ? segL.next = prev : head = prev
  tail.next = curr

  return head
}

console.log('before reversing: ')
printVals(head)
console.log('after reversing: ')
printVals(revSeg(head, 2, 3))