/** 生成唯一id函数 */
export function generateId(prefix?: string): string {
  return `${prefix || 'default'}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export function isObject(obj: unknown): boolean {
  return typeof obj === 'object' && obj !== null
}

export function isString(str: string): boolean {
  return typeof str === 'string'
}

export function isArray(arr: unknown[]) {
  return Array.isArray(arr)
}
