import { useEffect, useRef, useState } from "react"

import ValEmail from "utils/form/validations/Email"
import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"
import Submit from "components/__Shared/Input/Submit"
import Error from "components/__Shared/Error"
import Label from "components/__Shared/Label"
import InputText from "components/__Shared/Input/InputText"
import User from "services/User"
import UpdateProfile from "requests/UpdateProfile"
import Store from "store"
import { UserSetData } from "store/actions"

const Form = function () {
  const [error, setError] = useState(null)
  const form = useRef({
    name: {
      error: {}
    },
    email: {
      error: {}
    },
    submit: {}
  })

  useEffect(() => {
    const name = User.name()
    const email = User.email()
    form.current.name.setValue(name)
    form.current.email.setValue(email)
  }, [])

  const onSubmitHandler = function (ev) {
    ev.preventDefault()
    setError(null)
    const name = form.current.name.getValue()
    const email = form.current.email.getValue()
    // validation
    if (ValidateForm(form, name, email)) {
      return
    }

    form.current.submit.setDisabled()

    UpdateProfile({
      name,
      email
    })
      .then((result) => {
        const user = Store.getState().User
        const updatedData = { ...user, name: result.name, email: result.email }
        Store.dispatch(UserSetData(updatedData))
        window.localStorage.setItem("user", JSON.stringify(updatedData))
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
          title="Name"
          htmlFor="name"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        />
        <div className="mt-2 space-y-2">
          <InputText
            form={form.current.name}
            id="name"
            name="name"
            title="Your name"
            focus={true}
          />
          <p
            id=":r39:-form-item-description"
            className="text-[0.8rem] text-muted-foreground"
          >
            This is the name that will be displayed on your profile and in
            emails.
          </p>
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
        <div className="mt-2 space-y-2">
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

      <div className="flex items-center gap-2">
        <div className="max-w-[200px]">
          <Submit form={form.current.submit} value="Update account" />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    </form>
  )
}

const ValidateForm = (form, name, email) => {
  let error_found = false

  if (!ValString(name) || !ValStringMin(name, 1)) {
    form.current.name.showErrorMessage()
    form.current.name.error.showError("The name field is required.")
    error_found = true
  } else {
    form.current.name.hideErrorMessage()
    form.current.name.error.hideError()
  }

  if (!ValString(email) || !ValStringMin(email, 1)) {
    form.current.email.showErrorMessage()
    form.current.email.error.showError("The email field is required.")
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

  return error_found
}

export default Form
