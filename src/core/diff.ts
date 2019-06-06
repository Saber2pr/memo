/*
 * @Author: saber2pr
 * @Date: 2019-06-06 13:08:01
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-06 13:08:01
 */
export const diff = <T extends any[]>(a: T, b: T) => {
  let i = a.length > b.length ? a.length : b.length

  while (i--) {
    if (a[i] !== b[i]) return false
  }

  return true
}
