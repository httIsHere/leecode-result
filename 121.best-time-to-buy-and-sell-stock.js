/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1) return 0;
    let _max = 0, i = 0, _min = prices[0];
    for(; i < prices.length; i++) {
        if(prices[i] < _min) _min = prices[i];
        if(prices[i] - _min > _max) _max = prices[i] - _min;
    }
    console.log(_max);
    return _max;
};
// @lc code=end

let prices;
prices = [7,1,5,3,6,4];
// prices = [7,6,4,3,1]

maxProfit(prices)