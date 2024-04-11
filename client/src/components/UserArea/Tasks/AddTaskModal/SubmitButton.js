import { useState } from "react"

const SubmitButton = function ({ state }) {
  const [submitDisabled, setSubmitDisabled] = useState(false)

  state.form.submitDisabled = () => {
    setSubmitDisabled(true)
  }
  state.form.submitEnabled = () => {
    setSubmitDisabled(false)
  }

  return (
    <button
      type="submit"
      className="min-w-[200px] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
      form={state.form.id}
      disabled={submitDisabled}
    >
      Submit
    </button>
  )
}

export default SubmitButton
