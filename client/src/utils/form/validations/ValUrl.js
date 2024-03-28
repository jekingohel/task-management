const ValUrl = function (val) {
  if (val.indexOf("https://") > -1) {
    return true
  }

  if (val.indexOf("http://") > -1) {
    return true
  }

  return false
}

export default ValUrl
