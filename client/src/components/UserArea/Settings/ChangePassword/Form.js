import { useRef, useState } from "react"

import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"
import Submit from "components/__Shared/Input/Submit"
import Error from "components/__Shared/Error"
import Label from "components/__Shared/Label"
import Password from "components/__Shared/Input/Password"
import ValStringMax from "utils/form/validations/ValStringMax"
import UpdatePassword from "requests/UpdatePassword"

const Form = function () {
  const [error, setError] = useState(null)
  const form = useRef({
    password: {
      error: {}
    },
    confirm_password: {
      error: {}
    },
    submit: {}
  })

  const onSubmitHandler = function (ev) {
    ev.preventDefault()
    setError(null)
    const password = form.current.password.getValue()
    const confirm_password = form.current.confirm_password.getValue()
    // validation
    if (ValidateForm(form, password, confirm_password)) {
      return
    }

    form.current.submit.setDisabled()

    UpdatePassword({
      password
    })
      .then(() => {
        form.current.submit.setEnabled()
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
        form.current.submit.setEnabled()
      })
  }

  return (
    <form className="space-y-4" onSubmit={onSubmitHandler}>
      <div>
        <Label
          title="Password"
          htmlFor="password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <div className="group-pass space-y-2">
            <Password form={form.current.password} />
            <Error
              ngn={form.current.password.error}
              showClasses="text-sm font-medium text-red-500"
              hideClasses="text-sm font-medium text-red-500 hidden"
            />
          </div>
        </div>
      </div>

      <div>
        <Label
          title="Confirm Password"
          htmlFor="confirm_password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <div className="group-pass space-y-2">
            <Password form={form.current.confirm_password} />
            <Error
              ngn={form.current.confirm_password.error}
              showClasses="text-sm font-medium text-red-500"
              hideClasses="text-sm font-medium text-red-500 hidden"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="max-w-[200px]">
          <Submit form={form.current.submit} value="Update password" />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </form>
  )
}

const ValidateForm = (form, password, confirm_password) => {
  let error_found = false

  if (!ValString(password) || !ValStringMin(password, 1)) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError("The password field is required.")
    error_found = true
  } else if (!ValStringMin(password, 5)) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError(
      "The password must be at least 5 characters."
    )
    error_found = true
  } else if (!ValStringMax(password, 32)) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError(
      "The password must not be greater than 32 characters."
    )
    error_found = true
  } else {
    form.current.password.hideErrorMessage()
    form.current.password.error.hideError()
  }
  if (!ValString(confirm_password) || !ValStringMin(confirm_password, 1)) {
    form.current.confirm_password.showErrorMessage()
    form.current.confirm_password.error.showError(
      "The confirm password field is required."
    )
    error_found = true
  } else if (password !== confirm_password) {
    form.current.confirm_password.showErrorMessage()
    form.current.confirm_password.error.showError("Password do not match")
    error_found = true
  } else {
    form.current.confirm_password.hideErrorMessage()
    form.current.confirm_password.error.hideError()
  }

  return error_found
}

export default Form
