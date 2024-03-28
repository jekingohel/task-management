import Res from "services/Resources"

const WorkspaceName = (() => {
  const min = Res.getValidationRule("workspace.name.min")
  const max = Res.getValidationRule("workspace.name.max")

  return (value) => {
    return typeof value !== "string" || value.length < min || value.length > max
  }
})()

export default WorkspaceName
