/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
    
    return getDepth(root);
    
    function getDepth(root) {
        if(!root) return 0;
        let left_depth = getDepth(root.left);
        let right_depth = getDepth(root.right);
        // 只有左节点
        if(root.left && !root.right) {
            return 1 + left_depth;
        }
        if(!root.left && root.right) {
            return 1 + right_depth;
        }
        return 1 + Math.max(left_depth, right_depth)
    }
};
// @lc code=end

