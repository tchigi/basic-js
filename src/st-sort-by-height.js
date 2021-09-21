import { NotImplementedError } from '../extensions/index.js'

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let result = arr //[-1, 150, 190, 170, -1, -1, 160, 180]
  let sortArr = arr.slice(0)
  sortArr.sort((a, b) => a - b) //[ -1, -1, -1, 150, 160, 170, 180, 190 ]
  let index = findIndex(sortArr)

  function findIndex(sortArr) {
    let index = 0
    for (let i = 0; i < sortArr.length; i++) {
      if (sortArr[i] === -1) {
        index += 1
      }
    }
    return index
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== -1) {
      result.splice(i, 1, Number(sortArr[index + i]))
    } else sortArr.unshift(-1)
  }

  return result
}
