/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const mapper = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let total = 0;
    if (s.length <= 15 && s.length >= 1) {
        for (let i = 0; i < s.length; i++) {
            if (i >= s.length - 1 || mapper[s[i]] >= mapper[s[i + 1]]) {
                total = total + mapper[s[i]]
            } else if (mapper[s[i]] < mapper[s[i + 1]]) {
                const temp = mapper[s[i + 1]] - mapper[s[i]]
                total = total + temp
                i += 1
            }
        }
        console.log(total)
        return total
    } else {
        return false
    }
};
