/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
var postorderTraversal = function(root) {
    if(!root) return [];
    let list = [];
    postorder(root.left)
    postorder(root.right)
    list.push(root.val)
    return list;

    function postorder(root) {
        if(!root) return;
        postorder(root.left)
        postorder(root.right)
        list.push(root.val);
    }
};
// @lc code=end

