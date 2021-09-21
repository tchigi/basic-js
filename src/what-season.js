import { NotImplementedError } from '../extensions/index.js'

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }

  if (
    Object.prototype.toString.call(date) !== '[object Date]' ||
    typeof date !== 'object' ||
    Object.keys(date).length > 0 ||
    !(date instanceof Date)
  ) {
    throw new Error('Invalid date!')
  }

  let newDate = new Date(date)
  const month = newDate.getMonth()

  if (month <= 1 || month === 11) return 'winter'
  else if (month <= 4 && month >= 2) return 'spring'
  else if (month <= 7 && month >= 5) return 'summer'
  else if (month <= 10 && month >= 8) return 'fall'
}
