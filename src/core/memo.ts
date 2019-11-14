/*
 * @Author: saber2pr
 * @Date: 2019-06-06 13:16:40
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 13:44:52
 */
import { diff } from "./diff"

export type Memo = Array<[any[], any]>

const store = new WeakMap<Function, Memo>()

const MAX_SIZE_DEFAULT = 10

export const memo = <T extends Function>(
  fn: T,
  thisArg?: any,
  maxSize = MAX_SIZE_DEFAULT
): T => <any>((...args: any[]) => {
    const meta = store.get(fn) || []

    if (meta.length) {
      const mo = meta.find(([p]) => diff(p, args))
      if (mo) return mo[1]
    }

    const O = fn.apply(thisArg, args)

    meta.push([args, O])
    store.set(fn, meta)

    while (meta.length >= maxSize) meta.shift()

    return O
  })
