import { useEffect, useRef, useState } from "react"
import Label from "components/__Shared/Label"

const FormTitle = function ({ state }) {
  useEffect(() => {
    ref.current.focus()
  }, [])

  const ref = useRef()

  const [value, setValue] = useState("")
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(
    "Unknown task title. Please check and try again."
  )

  const className = hasError
    ? "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm is-invalid"
    : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"

  state.form.setTitleValue = (value) => {
    setValue(value)
  }
  state.form.getTitleValue = () => {
    return value
  }
  state.form.showTitleError = (value) => {
    setHasError(true)
    setErrorMessage(value)
  }
  state.form.hideTitleError = () => {
    setHasError(false)
    setErrorMessage("")
  }

  const onChangeValue = function (ev) {
    const newValue = ev.target.value
    setValue(newValue)
  }

  return (
    <>
      <div className="pb-2">
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
            value={value}
            onChange={onChangeValue}
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

export default FormTitle
