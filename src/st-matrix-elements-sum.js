import { NotImplementedError } from '../extensions/index.js'

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let result = 0

  for (let y = 0; y < matrix.length; y++) {
    for (let i = 0; i < matrix[y].length; i++) {
      if (matrix[y] === 0) {
        result += matrix[y][i]
      }

      if (y > 0 && matrix[y - 1][i] === 0) {
        result += 0
      } else {
        result += matrix[y][i]
      }
    }
  }
  return result
}
