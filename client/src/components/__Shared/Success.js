import { useState } from "react"

const Success = function ({
  ngn,
  showClasses = "invalid-feedback d-block",
  hideClasses = "invalid-feedback"
}) {
  const [hasSuccess, setHasSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const className = hasSuccess ? showClasses : hideClasses

  ngn.showSuccess = (message) => {
    setHasSuccess(true)
    setSuccessMessage(message)
  }
  ngn.hideSuccess = () => {
    setHasSuccess(false)
    setSuccessMessage("")
  }

  return <div className={className}>{successMessage}</div>
}

export default Success
