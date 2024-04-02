const ForgottenPassword = function ({ ngn }) {
  const onClickHandler = (ev) => {
    ev.preventDefault()
    ngn.modal.show()
  }

  return (
    <button
      type="button"
      className="font-semibold text-primary hover:opacity-85"
      onClick={onClickHandler}
    >
      Forgot password?
    </button>
  )
}

export default ForgottenPassword
