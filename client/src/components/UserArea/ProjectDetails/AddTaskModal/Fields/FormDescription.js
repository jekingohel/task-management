import { useState } from "react"
import Label from "components/__Shared/Label"

const FormDescription = function ({ state }) {
  const [value, setValue] = useState("")
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(
    "Unknown task description. Please check and try again."
  )

  const className = hasError
    ? "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm is-invalid"
    : "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"

  state.form.setDescriptionValue = (value) => {
    setValue(value)
  }
  state.form.getDescriptionValue = () => {
    return value
  }
  state.form.showDescriptionError = (value) => {
    setHasError(true)
    setErrorMessage(value)
  }
  state.form.hideDescriptionError = () => {
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
          title="Description"
          htmlFor="modalDescription"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <textarea
            id="modalDescription"
            name="modalDescription"
            rows="4"
            cols="50"
            className={className}
            value={value}
            onChange={onChangeValue}
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

export default FormDescription
