/*
 * @Author: your name
 * @Date: 2021-12-06 16:01:57
 * @LastEditTime: 2021-12-06 16:22:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /.leetcode/2000.reverse-prefix-of-word.js
 */
/*
 * @lc app=leetcode id=2000 lang=javascript
 *
 * [2000] Reverse Prefix of Word
 */

// @lc code=start
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let _num = -1; // the index of ch
    let i = 0;
    word = word.split('');
    while(i < word.length) {
        if(word[i] === ch) {
            _num = i;
            break;
        }
        i++;
    }
    for(let i = 0; i < _num / 2; i++) {
        let temp = word[i];
        word[i] = word[_num - i];
        word[_num - i] = temp;
    }
    return word.join('');
};
// @lc code=end

let word = "xyxzxe", ch = "z";

reversePrefix(word, ch);