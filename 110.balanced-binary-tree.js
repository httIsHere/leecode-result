/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
//   console.log(getDepth(root));
  return getDepth(root) === -1 ? false : true;
  function getDepth(root) {
    if (!root) return 0;
    let left_depth = getDepth(root.left);
    let right_depth = getDepth(root.right);
    // console.log(left_depth, right_depth);
    if (left_depth === -1 || right_depth === -1) return -1;
    if (Math.abs(left_depth - right_depth) > 1) return -1;
    if (root.left && !root.right) {
      return 1 + left_depth;
    }
    if (!root.left && root.right) {
      return 1 + right_depth;
    }
    return 1 + Math.max(left_depth, right_depth);
  }
};
// @lc code=end

let root;
root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    right: {
      val: 7,
      left: null,
      right: null,
    },
    left: {
      val: 15,
      left: null,
      right: null,
    },
  },
};

root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: { val: 4, left: null, right: null },
      right: { val: 4, left: null, right: null },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: { val: 2, left: null, right: null },
};

isBalanced(root);
