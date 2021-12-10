/*
 * @Author: your name
 * @Date: 2021-12-10 09:48:12
 * @LastEditTime: 2021-12-10 11:54:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/1974.minimum-time-to-type-word-using-special-typewriter.js
 */
/*
 * @lc app=leetcode id=1974 lang=javascript
 *
 * [1974] Minimum Time to Type Word Using Special Typewriter
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let move_num = 0, // 当前字符与目标字符的距离
        seconds = 0; // 总使用时间
    let current_ch = 'a';
    for(let ch of word) {
        seconds++;
        let tar = ch.charCodeAt(), cur = current_ch.charCodeAt();
        move_num = Math.abs(tar - cur);
        if(move_num > 13) {
            move_num = 26 - move_num;
        }
        // console.log(move_num);
        seconds += move_num;
        current_ch = ch;
        move_num = 0;
    }
    console.log(seconds);
    return seconds;
};
// @lc code=end
let word = "abc"
word = "bza"
word = "zjpc"
minTimeToType(word)
