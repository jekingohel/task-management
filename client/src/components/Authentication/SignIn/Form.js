import { useRef } from "react"

import Comm from "services/Comm"
import Auth from "services/Auth"
import Res from "services/Resources"
import Uri from "services/Uri"
import Store from "store"
import { AuthSetSigned } from "store/actions"
import ForgottenPassword from "components/Authentication/SignIn/ForgottenPassword"
import ValEmail from "utils/form/validations/Email"
import ValStringMin from "utils/form/validations/ValStringMin"
import ValString from "utils/form/validations/ValString"
import ValStringMax from "utils/form/validations/ValStringMax"
import Label from "components/__Shared/Label"
import Error from "components/__Shared/Error"
import Submit from "components/__Shared/Input/Submit"
import Password from "components/__Shared/Input/Password"
import InputText from "components/__Shared/Input/InputText"

const Form = function ({ ngn }) {
  const form = useRef({
    email: {
      error: {}
    },
    password: {
      error: {}
    },
    submit: {}
  })

  const onSubmitHandler = (ev) => {
    ev.preventDefault()

    const emailValue = form.current.email.getValue()
    const passwordValue = form.current.password.getValue()

    if (ValidateForm(form, emailValue, passwordValue)) {
      return
    }

    form.current.email.hideErrorMessage()
    form.current.email.error.hideError()
    form.current.password.hideErrorMessage()
    form.current.password.error.hideError()
    form.current.submit.setDisabled()

    // api request
    Comm.request({
      url: Uri.sessionAuth(),
      method: "post",
      data: {
        email: emailValue,
        password: passwordValue
      }
    })
      .then((res) => {
        // console.dir(res)
        if (res.data?.data?.user_id) {
          Auth.setUserID(res.data.data.user_id)
          Store.dispatch(AuthSetSigned())
        }
      })
      .catch((error) => {
        // console.dir(error)
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors
          if (errors.email) {
            form.current.email.showErrorMessage()
            form.current.email.error.showError(errors.email[0])
          }
          if (errors.password) {
            form.current.password.showErrorMessage()
            form.current.password.error.showError(errors.password[0])
          }
        } else if (error.response?.data?.message) {
          form.current.password.showErrorMessage()
          form.current.password.error.showError(error.response.data.message)
        }
        form.current.submit.setEnabled()
      })
  }

  return (
    <form className="space-y-5" onSubmit={onSubmitHandler}>
      <div>
        <Label
          title="Email"
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <InputText
            form={form.current.email}
            id="email"
            name="email"
            type="email"
            focus={true}
          />
          <Error
            ngn={form.current.email.error}
            showClasses="text-sm font-medium text-red-500"
            hideClasses="text-sm font-medium text-red-500 hidden"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label
            title="Password"
            htmlFor="password"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          />
          <div className="text-sm">
            <ForgottenPassword ngn={ngn} />
          </div>
        </div>
        <div className="mt-2">
          <Password form={form.current.password} />
          <Error
            ngn={form.current.password.error}
            showClasses="text-sm font-medium text-red-500"
            hideClasses="text-sm font-medium text-red-500 hidden"
          />
        </div>
      </div>

      <div>
        <Submit form={form.current.submit} value="Log In" />
      </div>
    </form>
  )
}

const ValidateForm = (form, emailValue, passwordValue) => {
  let hasErrors = false

  if (!ValString(emailValue) || !ValStringMin(emailValue, 1)) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError("The email field is required.")
    hasErrors = true
  } else if (!ValEmail(emailValue)) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError(
      "The email must be a valid email address."
    )
    hasErrors = true
  } else {
    form.current.email.hideErrorMessage()
    form.current.email.error.hideError()
  }
  if (!ValString(passwordValue) || !ValStringMin(passwordValue, 1)) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError("The password field is required.")
    hasErrors = true
  } else if (
    !ValStringMin(passwordValue, Res.getValidationRule("user.password.min"))
  ) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError(
      "The password must be at least 8 characters."
    )
    hasErrors = true
  } else if (
    !ValStringMax(passwordValue, Res.getValidationRule("user.password.max"))
  ) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError(
      "The password must not be greater than 32 characters."
    )
    hasErrors = true
  } else {
    form.current.password.hideErrorMessage()
    form.current.password.error.hideError()
  }

  return hasErrors
}

export default Form
