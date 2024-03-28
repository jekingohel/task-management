import PropTypes from "prop-types"

import FormSubmit from "components/Authentication/ResetPassword/FormSubmit"

const InputCheckbox = function ({
  className = "form-check-input",
  id = "",
  checked = false,
  onChangeHandler
}) {
  return (
    <input
      className={className}
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChangeHandler}
    />
  )
}

FormSubmit.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  onChangeHandler: PropTypes.func
}

export default InputCheckbox
