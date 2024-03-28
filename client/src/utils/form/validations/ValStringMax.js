const ValStringMax = function (value, max) {
  return !(typeof value !== "string" || value.length > max)
}

export default ValStringMax
