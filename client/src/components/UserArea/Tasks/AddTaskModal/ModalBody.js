import { useState } from "react"
import Success from "./Success"
import Form from "./Form"

const ModalBody = function ({ state, hideModal }) {
  const [showSuccess, setShowSuccess] = useState(false)

  state.form.body.showSuccess = () => {
    setShowSuccess(true)
  }
  state.form.body.hideSuccess = () => {
    setShowSuccess(false)
  }

  return showSuccess ? (
    <Success />
  ) : (
    <Form state={state} hideModal={hideModal} />
  )
}

export default ModalBody
