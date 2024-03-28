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
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:"
      form={state.form.id}
      disabled={submitDisabled}
    >
      Send me a link
    </button>
  )
}

export default SubmitButton
