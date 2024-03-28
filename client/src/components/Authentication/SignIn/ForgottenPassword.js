const ForgottenPassword = function ({ ngn }) {
  const onClickHandler = (ev) => {
    ev.preventDefault()
    ngn.modal.show()
  }

  return (
    <button
      type="button"
      className="font-semibold text-indigo-600 hover:text-indigo-500"
      onClick={onClickHandler}
    >
      Forgot password?
    </button>
  )
}

export default ForgottenPassword
