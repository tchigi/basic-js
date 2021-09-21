import { NotImplementedError } from '../extensions/index.js'

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = `${n}`.split('')
  let min = {
    index: 0,
    value: 9,
  }

  for (let i = 0; i < arr.length; i++) {
    if (min.value > arr[i]) {
      min.index = i
      min.value = arr[i]
    }
  }
  return Number(arr.filter((item, index) => index !== min.index).join(''))
}
