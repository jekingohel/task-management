import { useEffect, useRef } from "react"

import Comm from "services/Comm"
import Uri from "services/Uri"
import Res from "services/Resources"
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import FormPassword from "components/Authentication/ResetPassword/FormPassword"
import FormSubmit from "components/Authentication/ResetPassword/FormSubmit"
import ValPasswordMatch from "utils/form/validations/PasswordMatch"
import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"
import ValStringMax from "utils/form/validations/ValStringMax"

const Form = function ({ requestToken }) {
  const Signed = useSelector((state) => state.Auth.signed)
  const navigate = useNavigate()
  const userData = useRef({})
  const form = useRef({
    password: {},
    password_confirm: {},
    submit: {}
  })

  useEffect(
    function () {
      if (!Signed) {
        form.current.password.setDisabled()
        form.current.password_confirm.setDisabled()
        form.current.submit.setDisabled()

        // api request
        Comm.request({
          url: Uri.passwordResetsToken({ token: requestToken }),
          method: "get"
        })
          .then((response) => {
            //console.log(response)
            userData.current = response.data.data
            form.current.password.setEnabled()
            form.current.password_confirm.setEnabled()
            form.current.submit.setEnabled()
            form.current.password.setFocus()
          })
          .catch((error) => {
            //console.dir(error)
            navigate(Uri.signIn(), { replace: true })
          })
        // .then((response) => {
        //   console.log(response)
        //   userData.current = response.data.data
        //   form.current.password.setEnabled()
        //   form.current.password_confirm.setEnabled()
        //   form.current.submit.setEnabled()
        //   form.current.password.setFocus()
        // })
        // .catch((error) => {
        //   console.dir(error)
        //   navigate(Uri.signIn())
        // })
      }
    },
    [form, requestToken, navigate, Signed]
  )

  const onSubmitHandler = function (ev) {
    ev.preventDefault()

    const passwordValue = form.current.password.getValue()
    const passwordConfirmValue = form.current.password_confirm.getValue()

    let hasErrors = false

    // validation
    if (!ValString(passwordValue) || !ValStringMin(passwordValue, 1)) {
      form.current.password.showErrorMessage("The password field is required.")
      hasErrors = true
    } else if (
      !ValStringMin(passwordValue, Res.getValidationRule("user.password.min"))
    ) {
      form.current.password.showErrorMessage(
        "The password must be at least 8 characters."
      )
      hasErrors = true
    } else if (
      !ValStringMax(passwordValue, Res.getValidationRule("user.password.max"))
    ) {
      form.current.password.showErrorMessage(
        "The password must not be greater than 32 characters."
      )
      hasErrors = true
    }
    if (
      !ValString(passwordConfirmValue) ||
      !ValStringMin(passwordConfirmValue, 1)
    ) {
      form.current.password_confirm.showErrorMessage(
        "The password field is required."
      )
      hasErrors = true
    } else if (
      !ValStringMin(
        passwordConfirmValue,
        Res.getValidationRule("user.password.min")
      )
    ) {
      form.current.password_confirm.showErrorMessage(
        "The password must be at least 8 characters."
      )
      hasErrors = true
    } else if (
      !ValStringMax(
        passwordConfirmValue,
        Res.getValidationRule("user.password.max")
      )
    ) {
      form.current.password_confirm.showErrorMessage(
        "The password must not be greater than 32 characters."
      )
      hasErrors = true
    }
    if (!ValPasswordMatch(passwordValue, passwordConfirmValue)) {
      form.current.password_confirm.showErrorMessage(
        "Both passwords do not match."
      )
      hasErrors = true
    }
    if (hasErrors) {
      return
    }

    form.current.password.hideErrorMessage()
    form.current.password_confirm.hideErrorMessage()
    form.current.submit.setDisabled()

    // api request
    Comm.request({
      url: Uri.usersID({ id: userData.current.user_id }),
      method: "patch",
      data: {
        password_reset_token: requestToken,
        password: passwordValue
      }
    })
      .then((response) => {
        //console.log(response)
        navigate(Uri.resetPasswordSuccess(), { replace: true })
      })
      .catch((error) => {
        // console.dir(error)
        if (error.response?.data?.errors?.password) {
          form.current.password_confirm.showErrorMessage(
            error.response.data.errors.password[0]
          )
          form.current.submit.setEnabled()
        } else if (error.response?.data?.message) {
          form.current.password_confirm.showErrorMessage(
            error.response.data.message
          )
          form.current.submit.setEnabled()
        }
      })
      .then((response) => {
        //console.log(response)
        navigate(Uri.resetPasswordSuccess())
      })
      .catch((error) => {
        console.dir(error)
        if (error.response?.data?.errors?.password) {
          form.current.password_confirm.showErrorMessage(
            error.response.data.errors.password[0]
          )
          form.current.submit.setEnabled()
        } else if (error.response?.data?.message) {
          form.current.password_confirm.showErrorMessage(
            error.response.data.message
          )
          form.current.submit.setEnabled()
        }
      })
  }

  return Signed ? (
    <Navigate to={Uri.u()} replace={true} />
  ) : (
    <form onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <FormPassword
          form={form.current.password}
          label="Enter new password"
          id="password"
        />
      </div>

      <div className="mb-3">
        <FormPassword
          form={form.current.password_confirm}
          label="Confirm new password"
          id="password_confirm"
        />
      </div>

      <div className="mb-4">
        <FormSubmit
          form={form.current.submit}
          id="submit"
          value="Reset password"
        />
      </div>
    </form>
  )
}

export default Form
