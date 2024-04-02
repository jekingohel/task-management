import { useState } from "react"

import SubmitButton from "components/Authentication/ForgottenPasswordModal/SubmitButton"

const ModalFooter = function ({ state, hideModal }) {
  const [showSuccess, setShowSuccess] = useState(false)

  state.form.footer.showSuccess = () => {
    setShowSuccess(true)
  }
  state.form.footer.hideSuccess = () => {
    setShowSuccess(false)
  }

  return !showSuccess ? <SubmitButton state={state} /> : null
}

export default ModalFooter
