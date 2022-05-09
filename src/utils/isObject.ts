const isObject: (value: unknown) => boolean = (value) => {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export default isObject
