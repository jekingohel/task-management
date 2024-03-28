const ValImageSize = function (size, minSize, maxSize) {
  return typeof size === "number" && size >= minSize && size <= maxSize
}

export default ValImageSize
