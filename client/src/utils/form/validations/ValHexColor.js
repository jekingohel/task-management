import General from "configs/General"

const ValHexColor = function (value) {
  let r = new RegExp(General.hexColorRegEx)
  let result = r.exec(value)

  return result !== null
}

export default ValHexColor
