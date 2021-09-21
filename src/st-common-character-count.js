import { NotImplementedError } from '../extensions/index.js'

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('').sort()
  let arr2 = s2.split('').sort()
  let result = 0
  for (let i1 = 0, poebat = 0; i1 < arr1.length; i1++) {
    for (let i2 = poebat; i2 < arr2.length; i2++) {
      if (arr1[i1] === arr2[i2]) {
        result++
        poebat = i2 + 1
        break
      }
    }
  }
  return result
}
