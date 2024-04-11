import { useState } from "react"
import PropTypes from "prop-types"
import { ReactComponent as ShowPasswordIcon } from "images/icon-eye-show.svg"
import { ReactComponent as HidePasswordIcon } from "images/icon-eye-hide.svg"

const Password = function ({ form }) {
  const [value, setValue] = useState("")
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const className = showErrorMessage
    ? "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 is-invalid"
    : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  const inputType = passwordVisible ? "text" : "password"

  const onChangePasswordValue = function (ev) {
    setValue(ev.target.value)
  }

  const onClickToggleShowPassword = function () {
    setPasswordVisible(!passwordVisible)
  }

  form.getValue = () => {
    return value
  }
  form.setValue = (value) => {
    setValue(value)
  }
  form.showErrorMessage = () => {
    setShowErrorMessage(true)
  }
  form.hideErrorMessage = () => {
    setShowErrorMessage(false)
  }
  form.reset = () => {
    setValue("")
    setShowErrorMessage(false)
  }

  return (
    <div className="relative w-auto">
      <input
        type={inputType}
        className={className}
        autoComplete="off"
        value={value}
        onChange={onChangePasswordValue}
      />
      <button
        onClick={onClickToggleShowPassword}
        type="button"
        className="absolute top-0 right-0 end-0 p-2.5 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        {passwordVisible ? (
          <ShowPasswordIcon className="w-5" />
        ) : (
          <HidePasswordIcon className="w-5" />
        )}
      </button>
    </div>
  )
}

Password.propTypes = {
  form: PropTypes.object
}

export default Password
