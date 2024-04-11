import { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"

const InputText = function ({
  form,
  id,
  name,
  title = "",
  focus = false,
  type = "text"
}) {
  const ref = useRef()
  const [value, setValue] = useState("")
  const [showErrorMessage, setShowErrorMessage] = useState(false)

  useEffect(() => {
    if (focus) {
      ref.current.focus()
    }
  })

  const className = showErrorMessage
    ? "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 is-invalid"
    : "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

  const onChangeHandler = function (ev) {
    setValue(ev.target.value)
  }

  form.getValue = () => {
    return value
  }
  form.setValue = (value) => {
    setValue(value)
  }
  form.showErrorMessage = () => {
    setShowErrorMessage(true)
  }
  form.hideErrorMessage = () => {
    setShowErrorMessage(false)
  }
  form.focus = () => {
    ref.current.focus()
  }
  form.reset = () => {
    setValue("")
    setShowErrorMessage(false)
  }

  return (
    <input
      type={type}
      className={className}
      id={id}
      name={name}
      value={value}
      title={title}
      onChange={onChangeHandler}
      ref={ref}
    />
  )
}

InputText.propTypes = {
  form: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  focus: PropTypes.bool
}

export default InputText
