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
      className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
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
