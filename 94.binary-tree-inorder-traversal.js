/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let list = [];
  if (!root) return list;
  inorder(root.left);
  list.push(root.val);
  inorder(root.right);
  console.log(list);
  return list;
  function inorder(root) {
    if (!root) return;
    inorder(root.left);
    list.push(root.val);
    inorder(root.right);
  }
};
// @lc code=end
let root = {val: 1, left: null, right: null}, right_1 = {val: 2, left: null, right: null};
right_1.left = {val: 3, left: null, right: null};
root.right = right_1;

inorderTraversal(root);