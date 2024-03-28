import { useState } from "react"
import PropTypes from "prop-types"

const Submit = function ({ form, value = "" }) {
  const [disabled, setDisabled] = useState(false)

  form.setDisabled = () => {
    setDisabled(true)
  }
  form.setEnabled = () => {
    setDisabled(false)
  }
  form.reset = () => {
    setDisabled(false)
  }

  return (
    <input
      type="submit"
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      value={value}
      disabled={disabled}
    />
  )
}

Submit.propTypes = {
  form: PropTypes.object,
  value: PropTypes.string
}

export default Submit
