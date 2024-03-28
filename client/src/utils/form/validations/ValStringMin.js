const ValStringMin = function (value, min) {
  return !(typeof value !== "string" || value.length < min)
}

export default ValStringMin
