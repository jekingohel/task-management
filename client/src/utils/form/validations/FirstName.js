import Res from "services/Resources"

const FirstName = (() => {
  const min = Res.getValidationRule("user.first_name.min")
  const max = Res.getValidationRule("user.last_name.max")

  return (value) => {
    return typeof value !== "string" || value.length < min || value.length > max
  }
})()

export default FirstName
