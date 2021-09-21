import { NotImplementedError } from '../extensions/index.js'

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let result = []
  let arrSplits = domains.map((item) => item.split('.').reverse())

  for (let key of arrSplits) {
    key.reduce(function (accum, item) {
      let poebat
      if (accum != '') {
        poebat = `${accum}.${item}`
      } else {
        poebat = `.${item}`
      }

      result.push(poebat)
      return poebat
    }, '')
  }
  let resultObj = {}
  for (let i = 0; i < result.length; i++) {
    let trigger = false
    for (let key in resultObj) {
      if (key == result[i]) {
        ++resultObj[key]
        trigger = true
      }
    }
    if (trigger == false) {
      resultObj[result[i]] = 1
    }
  }
  return resultObj
}
