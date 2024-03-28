import { useState } from "react"

const Button = function ({
  ngn,
  title,
  onClick,
  className = "btn btn-primary"
}) {
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

  const onClickHandler = (ev) => {
    onClick(ev)
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button
