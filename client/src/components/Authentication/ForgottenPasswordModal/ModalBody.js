import { useState } from "react"

import Success from "components/Authentication/ForgottenPasswordModal/Success"
import Form from "components/Authentication/ForgottenPasswordModal/Form"

const ModalBody = function ({ state }) {
  const [showSuccess, setShowSuccess] = useState(false)

  state.form.body.showSuccess = () => {
    setShowSuccess(true)
  }
  state.form.body.hideSuccess = () => {
    setShowSuccess(false)
  }

  return showSuccess ? <Success /> : <Form state={state} />
}

export default ModalBody
