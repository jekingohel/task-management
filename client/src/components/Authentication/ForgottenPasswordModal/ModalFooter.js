import { useState } from "react"

import CloseButton from "components/Authentication/ForgottenPasswordModal/CloseButton"
import SubmitButton from "components/Authentication/ForgottenPasswordModal/SubmitButton"

const ModalFooter = function ({ state, hideModal }) {
  const [showSuccess, setShowSuccess] = useState(false)

  state.form.footer.showSuccess = () => {
    setShowSuccess(true)
  }
  state.form.footer.hideSuccess = () => {
    setShowSuccess(false)
  }

  return showSuccess ? (
    <CloseButton hideModal={hideModal} />
  ) : (
    <SubmitButton state={state} />
  )
}

export default ModalFooter
