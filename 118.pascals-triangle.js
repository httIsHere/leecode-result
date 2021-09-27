/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1], [1, 1]];
    let current_row = [1, 1], _row = 3;
    let result = [[1], [1, 1]];
    while(_row <= numRows) {
        let _current = [current_row[0]];
        for(let i = 1; i < current_row.length; i++) {
            _current.push(current_row[i] + current_row[i - 1]);
        }
        _current.push(current_row[current_row.length - 1]);
        current_row = _current;
        result.push(current_row);
        _row++;
    }
    console.log(result);
    return result;
};
// @lc code=end

generate(5)