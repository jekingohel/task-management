import Res from "services/Resources"

const LastName = (() => {
  const min = Res.getValidationRule("user.last_name.min")
  const max = Res.getValidationRule("user.last_name.max")

  return (value) => {
    return typeof value !== "string" || value.length < min || value.length > max
  }
})()

export default LastName
