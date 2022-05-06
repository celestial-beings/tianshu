const isNumber: (value: unknown) => boolean = (value) => {
  return !isNaN(Number(value))
}

export default isNumber
