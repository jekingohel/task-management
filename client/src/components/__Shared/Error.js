import { useState } from "react"

const Error = function ({
  ngn,
  showClasses = "text-sm font-medium text-red-500 block",
  hideClasses = "text-sm font-medium text-red-500"
}) {
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const className = hasError ? showClasses : hideClasses

  ngn.showError = (message) => {
    setHasError(true)
    setErrorMessage(message)
  }
  ngn.hideError = () => {
    setHasError(false)
    setErrorMessage("")
  }

  return <div className={className}>{errorMessage}</div>
}

export default Error
