import { useSelector } from "react-redux"

import Button from "components/__Shared/Input/Button"
import Error from "components/__Shared/Error"
import { useEffect } from "react"

const DeleteContentModal = function ({ ngn }) {
  const deleteContentOpened = useSelector(ngn.state)

  const closeModalHandler = function (ev) {
    ngn.hideModal()
  }

  let containerClasses = deleteContentOpened
    ? "modal cf-modal fade show"
    : "modal cf-modal fade"

  useEffect(() => {
    if (deleteContentOpened) {
      window.addEventListener("keydown", ngn.onEscape)
    } else {
      window.removeEventListener("keydown", ngn.onEscape)
    }
  }, [deleteContentOpened, ngn.onEscape])

  return (
    <div
      className={containerClasses}
      id="deleteContentModal"
      tabIndex="-1"
      aria-labelledby="deleteContentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteContentModalLabel">
              Delete Content
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
          <div className="modal-body">
            The selected items will be permanently deleted. Are you sure?
          </div>
          <div className="modal-footer">
            <Error ngn={ngn.errorMessage} />
            <button
              type="button"
              className="btn btn-outline-gray"
              data-bs-dismiss="modal"
              onClick={closeModalHandler}
            >
              Cancel
            </button>
            <Button
              ngn={ngn.submitButton}
              title="Delete"
              onClick={ngn.onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteContentModal
