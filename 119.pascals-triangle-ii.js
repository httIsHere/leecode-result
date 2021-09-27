/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return [1, 1];
    let current_row = [1, 1], _row = 2;
    while(_row <= rowIndex) {
        let _current = [current_row[0]];
        for(let i = 1; i < current_row.length; i++) {
            _current.push(current_row[i] + current_row[i - 1]);
        }
        _current.push(current_row[current_row.length - 1]);
        current_row = _current;
        _row++;
    }
    console.log(current_row);
    return current_row;
};
// @lc code=end


getRow(3)