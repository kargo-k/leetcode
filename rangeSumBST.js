// given the root of a BST, find the sum of the nodes between the L and R values (inclusive)

var rangeSumBST = function (root, L, R) {
  let sum = 0

  const _bst = (root, L, R) => {
    if (!root) return
    if (root.val >= L && root.val <= R) {
      sum += root.val
    }

    _bst(root.left, L, R)
    _bst(root.right, L, R)
  }

  _bst(root, L, R)
  return sum
};