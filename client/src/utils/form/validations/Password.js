import Res from "services/Resources"

const Password = (() => {
  const min = Res.getValidationRule("user.password.min")
  const max = Res.getValidationRule("user.password.max")

  return (value) => {
    return typeof value !== "string" || value.length < min || value.length > max
  }
})()

export default Password
