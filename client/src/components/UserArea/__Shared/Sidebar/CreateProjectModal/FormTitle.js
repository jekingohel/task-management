import { useEffect, useRef, useState } from "react"

import Label from "components/__Shared/Label"

const FormTitle = function ({ state }) {
  useEffect(() => {
    ref.current.focus()
  }, [])

  const ref = useRef()

  const [titleValue, setTitleValue] = useState("")
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(
    "Unknown project title. Please check and try again."
  )

  const className = hasError
    ? "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm is-invalid"
    : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"

  state.form.setTitleValue = (value) => {
    setTitleValue(value)
  }
  state.form.getTitleValue = () => {
    return titleValue
  }
  state.form.showError = (value) => {
    setHasError(true)
    setErrorMessage(value)
  }
  state.form.hideError = () => {
    setHasError(false)
    setErrorMessage("")
  }

  const onChangeValue = function (ev) {
    const newValue = ev.target.value.replace(/\s+/g, "-")
    setTitleValue(newValue)
  }

  return (
    <>
      <div>
        <Label
          title="Title"
          htmlFor="modalTitle"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <input
            type="text"
            className={className}
            id="modalTitle"
            value={titleValue}
            onChange={onChangeValue}
            ref={ref}
          />
          <p className="text-sm text-muted-foreground my-3">
            Projects are where conversations happen around a topic. Use a name
            that is easy to find and understand.
          </p>
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

export default FormTitle
