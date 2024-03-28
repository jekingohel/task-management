import { useState } from "react"
import PropTypes from "prop-types"

const FormSubmit = function ({ value, form, id }) {
  const [disabled, setDisabled] = useState(false)

  form.setDisabled = () => {
    setDisabled(true)
  }
  form.setEnabled = () => {
    setDisabled(false)
  }
  form.reset = () => {
    form.setEnabled()
  }

  return (
    <input
      type="submit"
      className="btn btn-primary btn-submit"
      id={id}
      value={value}
      disabled={disabled}
    />
  )
}

FormSubmit.propTypes = {
  value: PropTypes.string,
  form: PropTypes.object,
  id: PropTypes.string
}

export default FormSubmit
