/*
 * @lc app=leetcode id=225 lang=javascript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

var MyStack = function() {
    this.arr = [];
    // return this.arr;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let last = this.arr.length - 1;
    let last_num = this.arr[last];
    let new_arr = [];
    for(let i = 0; i < last; i++) {
        new_arr.push(this.arr[i]);
    }
    console.log(new_arr);
    this.arr = JSON.parse(JSON.stringify(new_arr));
    return last_num;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let last = this.arr.length - 1;
    let last_num = this.arr[last];
    return last_num;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.arr.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

var obj = new MyStack()
obj.push(1)
var param_2 = obj.pop()
console.log(obj.arr)
var param_3 = obj.top()
var param_4 = obj.empty()
console.log(param_2, param_3, param_4)