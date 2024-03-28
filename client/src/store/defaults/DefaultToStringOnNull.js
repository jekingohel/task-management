import DefaultToString from "store/defaults/DefaultToString"

const DefaultToStringOnNull = function (value) {
  if (value === null) {
    return DefaultToString()
  }

  return value
}

export default DefaultToStringOnNull
