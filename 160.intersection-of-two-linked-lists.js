/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;
    // 暴力遍历
    while(headA) {
        let _b = headB;
        while(_b) {
            if(headA === _b) {
                return headA;
            }
            _b = _b.next;
        }
        headA = headA.next;
    }
    return null;
};
// @lc code=end

// getIntersectionNode()

// 官方O(1)内存复杂度解法
// 使用A+B和B+A进行遍历，因为长度是一样的所以可以在同一个循环内
// 如果有相交部分，那么pA就会与pB相等
// 图解：https://blog.csdn.net/qq_17550379/article/details/85680899