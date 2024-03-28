const CloseButton = function ({ hideModal }) {
  return (
    <button
      type="button"
      className="btn btn-primary btn-block"
      onClick={hideModal}
    >
      Close
    </button>
  )
}

export default CloseButton
