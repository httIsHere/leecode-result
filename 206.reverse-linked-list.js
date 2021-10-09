/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let _head = head,
    _next = head.next;
  _head.next = null;
  while (_next) {
    let __next = _next.next; // 记录下一个节点
    // 反转当前节点
    _next.next = _head;
    _head = _next;
    _next = __next;
    if (!__next) {
    //     let __head = _head;
    //   while(__head) {
    //       console.log(__head.val);
    //       __head = __head.next
    //   }
      return _head;
    }
  }
};
// @lc code=end
let head;
head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
reverseList(head);
