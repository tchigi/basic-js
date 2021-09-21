import { NotImplementedError } from '../extensions/index.js'

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(
  str,
  {
    repeatTimes,
    separator = '+',
    addition,
    additionRepeatTimes,
    additionSeparator = '|',
  }
) {
  str = `${str}`
  addition = `${addition}`

  // (str+((addition+additionSeparator)*additionRepeatTimes)+strSeparator)* repaetTimes
  let addResult = ''
  let strResult = ''
  if (additionRepeatTimes && addition) {
    addResult = addition + additionSeparator
    addResult = addResult
      .repeat(additionRepeatTimes)
      .slice(0, -additionSeparator.length)
  } else if (addition && addition !== 'undefined') {
    addResult = addition
  }
  // (str+addResult+strSeparator)* repaetTimes
  if (repeatTimes && separator) {
    strResult = str + addResult + separator
    strResult = strResult.repeat(repeatTimes).slice(0, -separator.length)
  } else if (separator) {
    strResult = str + addResult
  }

  return strResult
}
