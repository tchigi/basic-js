import { NotImplementedError } from '../extensions/index.js'

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let dreamTeam = []
  let firstLetter
  if (Array.isArray(members) && members.length > 0) {
    for (let value of members) {
      if (typeof value === 'string') {
        if (value[0] === ' ') {
          let i = 0
          do {
            i++
            firstLetter = value[i]
          } while (value[i] === ' ')
          dreamTeam.push(firstLetter)
        } else dreamTeam.push(value[0])
      }
    }
    return dreamTeam.join('').toUpperCase().split('').sort().join('')
  } else return false
}
