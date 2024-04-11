import { useRef } from "react"

import Comm from "services/Comm"
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
import AddMinutesToTimestamp from "utils/AddMinutesToTimestamp"
import Store from "store"
import { AuthSetSigned } from "store/actions"

const MINUTES_TO_CHECK_FOR_TOKEN_REFRESH = 1440

const Form = function () {
  const form = useRef({
    name: {
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

    const name = form.current.name.getValue()
    const email = form.current.email.getValue()
    const password = form.current.password.getValue()

    // validation
    if (ValidateForm(form, name, email, password)) {
      return
    }

    form.current.submit.setDisabled()

    // api request
    Comm.request({
      url: Uri.register(),
      method: "post",
      data: {
        name,
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
          .then((res) => {
            if (res.status === 200) {
              window.localStorage.setItem("user", JSON.stringify(res.data.user))
              window.localStorage.setItem(
                "token",
                JSON.stringify(res.data.token)
              )
              window.localStorage.setItem(
                "tokenExpiration",
                JSON.stringify(
                  AddMinutesToTimestamp(MINUTES_TO_CHECK_FOR_TOKEN_REFRESH)
                )
              )
              if (res.data?.user._id) {
                Auth.setUserID(res.data?.user._id)
                Store.dispatch(AuthSetSigned())
              }
            }
          })
          .catch((error) => {
            //console.dir(error)
          })
      })
      .catch((error) => {
        if (error.response?.data?.errors) {
          const errors = error.response.data.errors
          if (errors.msg === "EMAIL_ALREADY_EXISTS") {
            form.current.email.showErrorMessage()
            form.current.email.error.showError("Email already exists")
          }
        }
        form.current.submit.setEnabled()
      })
  }

  return (
    <form className="space-y-4" onSubmit={onSubmitHandler}>
      <div>
        <Label
          title="Name"
          htmlFor="name"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2">
          <InputText
            form={form.current.name}
            id="name"
            name="name"
            title="Name"
            focus={true}
          />
          <Error
            ngn={form.current.name.error}
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

const ValidateForm = (form, name, email, password) => {
  let error_found = false

  if (!ValString(name) || !ValStringMin(name, 1)) {
    form.current.name.showErrorMessage()
    form.current.name.error.showError("The first name field is required.")
    error_found = true
  } else if (!ValStringMin(name, 2)) {
    form.current.name.showErrorMessage()
    form.current.name.error.showError(
      "The first name must be at least 2 characters."
    )
    error_found = true
  } else if (!ValStringMax(name, 24)) {
    form.current.name.showErrorMessage()
    form.current.name.error.showError(
      "The first name must not be greater than 24 characters."
    )
    error_found = true
  } else {
    form.current.name.hideErrorMessage()
    form.current.name.error.hideError()
  }

  if (!ValString(email) || !ValStringMin(email, 1)) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError("The email field is required.")
    error_found = true
  } else if (!ValStringMin(email, 3)) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError(
      "The email must be at least 3 characters."
    )
    error_found = true
  } else if (!ValStringMax(email, 255)) {
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

  return error_found
}

export default Form
