import { useEffect, useRef, useState } from "react"

import Label from "components/__Shared/Label"

const FormEmail = function ({ state }) {
  useEffect(() => {
    ref.current.focus()
  }, [])

  const ref = useRef()

  const [emailValue, setEmailValue] = useState("")
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(
    "Unknown email address. Please check and try again."
  )

  const className = hasError
    ? "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm is-invalid"
    : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"

  state.form.setEmailValue = (value) => {
    setEmailValue(value)
  }
  state.form.getEmailValue = () => {
    return emailValue
  }
  state.form.showError = (value) => {
    setHasError(true)
    setErrorMessage(value)
  }
  state.form.hideError = () => {
    setHasError(false)
    setErrorMessage("")
  }

  const onChangeEmailValue = function (ev) {
    setEmailValue(ev.target.value)
  }

  return (
    <>
      <p className="text-sm text-muted-foreground mb-3">
        Enter your registered email address and we'll send you instructions on
        how to reset your password.
      </p>
      <div>
        <Label
          title="Email"
          htmlFor="modalEmail"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <input
            type="email"
            className={className}
            id="modalEmail"
            value={emailValue}
            onChange={onChangeEmailValue}
            ref={ref}
          />
          {hasError && (
            <div className="text-sm font-medium text-red-500 mt-2">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default FormEmail
