/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

var MyQueue = function() {
    this.queue = [];
    this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
    this.length++;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // 第一个出来
    let new_queue = [], first_num = this.queue[0];
    for(let i = 1; i < this.queue.length; i++) {
        new_queue.push(this.queue[i])
    }
    console.log(new_queue)
    this.queue = JSON.parse(JSON.stringify(new_queue));
    this.length--;
    return first_num;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

var obj = new MyQueue()
obj.push(1)
obj.push(2)
console.log(obj.queue)
var param_3 = obj.peek()
var param_2 = obj.pop()
var param_4 = obj.empty()
console.log(param_2, param_3, param_4)