const isVaildNumber: (value: unknown) => boolean = (value) => {
  return !isNaN(Number(value))
}

export default isVaildNumber
