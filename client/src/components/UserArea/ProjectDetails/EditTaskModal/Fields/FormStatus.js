import { useRef, useState } from "react"
import Label from "components/__Shared/Label"

const FormStatus = function ({ state, defaultValue = "" }) {
  const ref = useRef()

  const [value, setValue] = useState(defaultValue)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(
    "Unknown task status. Please check and try again."
  )

  const className = hasError
    ? "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm is-invalid"
    : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"

  state.form.setStatusValue = (value) => {
    setValue(value)
  }
  state.form.getStatusValue = () => {
    return value
  }
  state.form.showStatusError = (value) => {
    setHasError(true)
    setErrorMessage(value)
  }
  state.form.hideStatusError = () => {
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
          title="Status"
          htmlFor="modalStatus"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <select
            name="modalStatus"
            id="modalStatus"
            className={className}
            value={value}
            onChange={onChangeValue}
            ref={ref}
          >
            <option value="todo">Todo</option>
            <option value="inprogress">Inprogress</option>
            <option value="done">Done</option>
          </select>
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

export default FormStatus
