import { useSelector } from "react-redux"
import Store from "store"
import Modal from "services/Modal"
import { SharedModalConfirmContentActionHide } from "store/actions"
import { useEffect } from "react"
import Button from "components/__Shared/Input/Button"
import Error from "components/__Shared/Error"

const ConfirmContentActionModal = function () {
  const { opened, message, ngn } = useSelector(
    (state) => state.Shared.modals.confirm_action
  )

  useEffect(() => {
    if (opened) {
      window.addEventListener("keydown", closeModalHandler)
    } else {
      window.removeEventListener("keydown", closeModalHandler)
    }
  }, [opened])

  const closeModalHandler = function (ev) {
    Modal.hide()
    Store.dispatch(SharedModalConfirmContentActionHide())
  }

  const onConfirm = function (ev) {
    if (typeof ngn === "object") {
      ngn.onSubmit()
    }
  }

  let containerClasses = opened
    ? "modal cf-modal fade show"
    : "modal cf-modal fade"

  return (
    <div
      className={containerClasses}
      id="ConfirmContentActionModal"
      tabIndex="-1"
      aria-labelledby="ConfirmContentActionModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ConfirmContentActionModalLabel">
              Confirm Action
            </h5>
            <hr />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModalHandler}
            ></button>
          </div>
          <div className="modal-body">{message}</div>
          <div className="modal-footer">
            {ngn && <Error ngn={ngn.errorMessage} />}
            <button
              type="button"
              className="btn btn-outline-gray"
              data-bs-dismiss="modal"
              onClick={closeModalHandler}
            >
              Cancel
            </button>
            {ngn && (
              <Button
                ngn={ngn.submitButton}
                title="Confirm"
                onClick={onConfirm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmContentActionModal
