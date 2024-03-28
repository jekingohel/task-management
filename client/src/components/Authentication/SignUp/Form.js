import { useRef } from "react"

import Comm from "services/Comm"
import Res from "services/Resources"
import Auth from "services/Auth"
import Uri from "services/Uri"
import ValEmail from "utils/form/validations/Email"
import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"
import ValStringMax from "utils/form/validations/ValStringMax"
import Submit from "components/__Shared/Input/Submit"
import Error from "components/__Shared/Error"
import Label from "components/__Shared/Label"
import Password from "components/__Shared/Input/Password"
import InputText from "components/__Shared/Input/InputText"

const Form = function () {
  const form = useRef({
    first_name: {
      error: {}
    },
    last_name: {
      error: {}
    },
    email: {
      error: {}
    },
    password: {
      error: {}
    },
    submit: {}
  })

  const onSubmitHandler = function (ev) {
    ev.preventDefault()

    const first_name = form.current.first_name.getValue()
    const last_name = form.current.last_name.getValue()
    const email = form.current.email.getValue()
    const password = form.current.password.getValue()

    // validation
    if (ValidateForm(form, first_name, last_name, email, password)) {
      return
    }

    form.current.submit.setDisabled()

    // api request
    Comm.request({
      url: Uri.users(),
      method: "post",
      data: {
        first_name,
        last_name,
        email,
        password
      }
    })
      .then((response) => {
        // console.dir(response)
        // api request
        Comm.request({
          url: Uri.sessionAuth(),
          method: "post",
          data: {
            email: email,
            password: password
          }
        })
          .then((response) => {
            // console.dir(response)
            if (response.data?.data?.user_id) {
              Auth.setUserID(response.data.data.user_id)
              Auth.signIn()
            }
          })
          .catch((error) => {
            //console.dir(error)
          })
      })
      .catch((error) => {
        //console.dir(error)
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors
          if (errors.first_name) {
            form.current.first_name.showErrorMessage()
            form.current.first_name.error.showError(errors.first_name[0])
          }
          if (errors.last_name) {
            form.current.last_name.showErrorMessage()
            form.current.last_name.error.showError(errors.last_name[0])
          }
          if (errors.email) {
            form.current.email.showErrorMessage()
            form.current.email.error.showError(errors.email[0])
          }
          if (errors.password) {
            form.current.password.showErrorMessage()
            form.current.password.error.showError(errors.password[0])
          }
        }
        form.current.submit.setEnabled()
      })
  }

  return (
    <form className="space-y-4" onSubmit={onSubmitHandler}>
      <div>
        <Label
          title="First name"
          htmlFor="first-name"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <InputText
            form={form.current.first_name}
            id="first-name"
            name="first_name"
            title="First name"
            focus={true}
          />
          <Error
            ngn={form.current.first_name.error}
            showClasses="text-sm font-medium text-red-500"
            hideClasses="text-sm font-medium text-red-500 hidden"
          />
        </div>
      </div>

      <div>
        <Label
          title="Last name"
          htmlFor="last-name"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <InputText
            form={form.current.last_name}
            id="last-name"
            name="last_name"
            title="Last name"
          />
          <Error
            ngn={form.current.last_name.error}
            showClasses="text-sm font-medium text-red-500"
            hideClasses="text-sm font-medium text-red-500 hidden"
          />
        </div>
      </div>

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
            title="Email"
          />
          <Error
            ngn={form.current.email.error}
            showClasses="text-sm font-medium text-red-500"
            hideClasses="text-sm font-medium text-red-500 hidden"
          />
        </div>
      </div>

      <div>
        <Label
          title="Password"
          htmlFor="password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <div className="group-pass">
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
        <Submit form={form.current.submit} value="Create an account" />
      </div>
    </form>
  )
}

const ValidateForm = (form, first_name, last_name, email, password) => {
  let error_found = false

  if (!ValString(first_name) || !ValStringMin(first_name, 1)) {
    form.current.first_name.showErrorMessage()
    form.current.first_name.error.showError("The first name field is required.")
    error_found = true
  } else if (
    !ValStringMin(first_name, Res.getValidationRule("user.first_name.min"))
  ) {
    form.current.first_name.showErrorMessage()
    form.current.first_name.error.showError(
      "The first name must be at least 2 characters."
    )
    error_found = true
  } else if (
    !ValStringMax(first_name, Res.getValidationRule("user.first_name.max"))
  ) {
    form.current.first_name.showErrorMessage()
    form.current.first_name.error.showError(
      "The first name must not be greater than 24 characters."
    )
    error_found = true
  } else {
    form.current.first_name.hideErrorMessage()
    form.current.first_name.error.hideError()
  }
  if (!ValString(last_name) || !ValStringMin(last_name, 1)) {
    form.current.last_name.showErrorMessage()
    form.current.last_name.error.showError("The last name field is required.")
    error_found = true
  } else if (
    !ValStringMin(last_name, Res.getValidationRule("user.last_name.min"))
  ) {
    form.current.last_name.showErrorMessage()
    form.current.last_name.error.showError(
      "The last name must be at least 2 characters."
    )
    error_found = true
  } else if (
    !ValStringMax(last_name, Res.getValidationRule("user.last_name.max"))
  ) {
    form.current.last_name.showErrorMessage()
    form.current.last_name.error.showError(
      "The last name must not be greater than 24 characters."
    )
    error_found = true
  } else {
    form.current.last_name.hideErrorMessage()
    form.current.last_name.error.hideError()
  }
  if (!ValString(email) || !ValStringMin(email, 1)) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError("The email field is required.")
    error_found = true
  } else if (!ValStringMin(email, Res.getValidationRule("user.email.min"))) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError(
      "The email must be at least 3 characters."
    )
    error_found = true
  } else if (!ValStringMax(email, Res.getValidationRule("user.email.max"))) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError(
      "The email must not be greater than 255 characters."
    )
    error_found = true
  } else if (!ValEmail(email)) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError(
      "The email must be a valid email address."
    )
    error_found = true
  } else {
    form.current.email.hideErrorMessage()
    form.current.email.error.hideError()
  }
  if (!ValString(password) || !ValStringMin(password, 1)) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError("The password field is required.")
    error_found = true
  } else if (
    !ValStringMin(password, Res.getValidationRule("user.password.min"))
  ) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError(
      "The password must be at least 8 characters."
    )
    error_found = true
  } else if (
    !ValStringMax(password, Res.getValidationRule("user.password.max"))
  ) {
    form.current.password.showErrorMessage()
    form.current.password.error.showError(
      "The password must not be greater than 32 characters."
    )
    error_found = true
  } else {
    form.current.password.hideErrorMessage()
    form.current.password.error.hideError()
  }

  return error_found
}

export default Form
