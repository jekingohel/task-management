import { useState } from "react"
import PropTypes from "prop-types"

const Submit = function ({ ngn, value = "" }) {
  const [disabled, setDisabled] = useState(false)

  ngn.setDisabled = () => {
    setDisabled(true)
  }
  ngn.setEnabled = () => {
    setDisabled(false)
  }
  ngn.reset = () => {
    setDisabled(false)
  }

  return (
    <input
      type="submit"
      className="btn btn-primary"
      value={value}
      disabled={disabled}
    />
  )
}

Submit.propTypes = {
  ngn: PropTypes.object,
  value: PropTypes.string
}

export default Submit
