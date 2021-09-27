/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    if(!root.left && !root.right) 
        return targetSum === root.val;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};
// @lc code=end

// let root = {val: 1, left: null, right: null}, right_1 = {val: 2, left: null, right: null};
// right_1.left = {val: 3, left: null, right: null};
// root.right = right_1;

let root = {
    val: 1,
    left: {val: 2, left: null, right: null},
    right: {val: 3, left: null, right: null},
}

let result = hasPathSum(root, 2);
console.log(result)
