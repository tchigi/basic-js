import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push('')
    } else this.arr.push(`${value}`)

    return this
  },
  removeLink(position) {
    if (position % 1 === 0 && position <= this.arr.length && position > 0) {
      this.arr.splice(position - 1, 1)
    } else {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    const result = this.arr.reduce((accum, item, index, thisArray) => {
      if (thisArray.length === index + 1) {
        return `${accum}( ${item} )`
      }
      return `${accum}( ${item} )~~`
    }, '')
    this.arr = []
    return result
  },
}
