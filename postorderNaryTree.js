// 590. Given the root to a N-ary Tree, print the node's values postorder

var postorder = function (root) {
  let arr = []

  let _postorder = root => {
    if (!root) return

    arr.unshift(root.val)
    root.children.reverse().forEach(child => _postorder(child))
  }

  _postorder(root)
  return arr
};