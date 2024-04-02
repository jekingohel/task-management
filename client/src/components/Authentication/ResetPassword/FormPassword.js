import { useState, useRef } from "react"

import Label from "components/__Shared/Label"
import { ReactComponent as ShowPasswordIcon } from "images/icon-eye-show.svg"
import { ReactComponent as HidePasswordIcon } from "images/icon-eye-hide.svg"

const FormPassword = function ({ form, label, id }) {
  const ref = useRef()

  const [passwordValue, setPasswordValue] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const passwordType = passwordVisible ? "text" : "password"
  const className = showErrorMessage
    ? "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm is-invalid"
    : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"

  const onChangeHandler = function (ev) {
    setPasswordValue(ev.target.value)
  }

  const onClickToggleHandler = function () {
    setPasswordVisible(!passwordVisible)
  }

  form.setDisabled = () => {
    setIsDisabled(true)
  }
  form.setEnabled = () => {
    setIsDisabled(false)
  }
  form.setValue = (value) => {
    setPasswordValue(value)
  }
  form.getValue = () => {
    return passwordValue
  }
  form.showErrorMessage = (value) => {
    setErrorMessage(value)
    setShowErrorMessage(true)
  }
  form.hideErrorMessage = () => {
    setErrorMessage("")
    setShowErrorMessage(false)
  }
  form.setPasswordVisible = () => {
    setPasswordVisible(true)
  }
  form.setPasswordHidden = () => {
    setPasswordVisible(false)
  }
  form.setFocus = () => {
    ref.current.focus()
  }
  form.reset = () => {
    form.setValue("")
    form.hideErrorMessage()
    form.setPasswordHidden()
  }

  return (
    <>
      <Label
        title={label}
        htmlFor="password"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      />
      <div className="mt-2">
        <div className="relative">
          <span
            className="show-pass"
            title="Show password"
            onClick={onClickToggleHandler}
          >
            {" "}
          </span>
          <input
            type={passwordType}
            className={className}
            id={id}
            required={true}
            value={passwordValue}
            onChange={onChangeHandler}
            disabled={isDisabled}
            ref={ref}
          />
          <button
            onClick={onClickToggleHandler}
            type="button"
            className="absolute top-0 end-0 p-2.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            {passwordVisible ? (
              <ShowPasswordIcon className="w-5" />
            ) : (
              <HidePasswordIcon className="w-5" />
            )}
          </button>
        </div>
        {showErrorMessage && (
          <div className="text-sm font-medium text-red-500 mt-2">
            {errorMessage}
          </div>
        )}
      </div>
    </>
  )
}

export default FormPassword
