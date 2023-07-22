/**
 *
 * @param {String} str
 * @param {String} subStr
 * @return {Boolean}
 */
export const includeString = (str, subStr) => {
    return str.toLowerCase().indexOf(subStr.toLowerCase()) !== -1
}
