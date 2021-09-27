/*
 * @Author: your name
 * @Date: 2021-09-27 11:50:54
 * @LastEditTime: 2021-09-27 14:04:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/141.linked-list-cycle.js
 */
/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next) return false;
    let slow = head, fast = head.next;
    while(slow !== fast) {
        if(!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// @lc code=end

// 思路：快指针和慢指针，慢指针指向第一个节点，快指针指向第二个节点
// 慢指针走一步，快指针走两步
// 如果没有内循环那么一定会出现快指针为空或者快指针next为空的情况
// 如果有内循环，那么在一定的时间一定会出现慢指针与快指针指向同一节点