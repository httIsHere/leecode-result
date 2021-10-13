/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // 无法获取上一个节点，只能操作当前节点
    // 复制下一个节点给当前节点
    // 将下一个节点作为需要删除的节点
    node.val = node.next.val;
    node.next = node.next.next;
};
// @lc code=end

