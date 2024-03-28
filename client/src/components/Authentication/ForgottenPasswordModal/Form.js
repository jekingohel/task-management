import Uri from "services/Uri"
import Comm from "services/Comm"
import FormEmail from "components/Authentication/ForgottenPasswordModal/FormEmail"
import ValEmail from "utils/form/validations/Email"
import ValString from "utils/form/validations/ValString"
import ValStringMin from "utils/form/validations/ValStringMin"

const Form = function ({ state }) {
  const onFormSubmitHandler = (ev) => {
    ev.preventDefault()

    const emailValue = state.form.getEmailValue()

    // validation
    if (!ValString(emailValue) || !ValStringMin(emailValue, 1)) {
      state.form.showError("The email field is required.")
      return
    } else if (!ValEmail(emailValue)) {
      state.form.showError("The email must be a valid email address.")
      return
    }

    state.form.hideError()
    state.form.submitDisabled()
    state.form.body.hideSuccess()
    state.form.footer.hideSuccess()

    // api request
    Comm.request({
      url: Uri.passwordResets(),
      method: "post",
      data: {
        email: emailValue
      }
    })
      .then((response) => {
        //console.dir(response)
        state.form.setEmailValue("")
        state.form.submitEnabled()
        state.form.body.showSuccess()
        state.form.footer.showSuccess()
      })
      .catch((error) => {
        //console.dir(error)
        state.form.showError(
          "Unknown email address. Please check and try again."
        )
        state.form.submitEnabled()
      })
  }

  return (
    <form id={state.form.id} onSubmit={onFormSubmitHandler}>
      <FormEmail state={state} />
    </form>
  )
}

export default Form
