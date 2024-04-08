import { useState } from "react"

const Continue = function ({ ngn, onClickHandler }) {
  const [disabled, setDisabled] = useState(false)

  ngn.enableSubmit = () => {
    setDisabled(false)
  }
  ngn.disableSubmit = () => {
    setDisabled(true)
  }

  return (
    <button
      className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
      type="button"
      disabled={disabled}
      onClick={onClickHandler}
    >
      Continue
    </button>
  )
}

export default Continue
