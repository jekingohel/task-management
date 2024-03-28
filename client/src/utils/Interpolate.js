const Interpolate = (str, data) => {
  for (let item in data) {
    str = str.replace(new RegExp(`:${item}`, "gi"), data[item])
  }
  return str
}

export default Interpolate
