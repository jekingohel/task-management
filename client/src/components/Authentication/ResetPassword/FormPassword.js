import { useState, useRef } from "react"

import Label from "components/__Shared/Label"

const FormPassword = function ({ form, label, id }) {
  const ref = useRef()

  const [passwordValue, setPasswordValue] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const passwordType = passwordVisible ? "text" : "password"
  const className = showErrorMessage
    ? "form-control is-invalid"
    : "form-control"

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
      <Label title={label} htmlFor="password" className="form-label" />
      <div className="group-pass">
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
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </>
  )
}

export default FormPassword
