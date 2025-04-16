import { isObject } from './utils'

/**
 * 将对象转换为字符串，用于生成 Object style -> String style;
 * @param obj
 * @returns string | undefined
 */
export function transferObjectToString<T extends Record<string, unknown>>(
  obj: T,
): string | undefined {
  if (isObject(obj)) {
    let result = ''
    const keys = Object.keys(obj)

    for (const index in keys) {
      const _key = keys[index]
      const val = obj[_key]
      const key = tarnsferUpperstrToLowerStr(_key)
      if (isObject(val)) {
        return
      }
      result += `${key}:${val};`
    }
    return result
  }
}

function tarnsferUpperstrToLowerStr(str: string) {
  return str.replace(/([A-Z])/g, (match) => {
    return `-${match.toLowerCase()}`
  })
}
